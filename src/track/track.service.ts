import { InjectRepository, PrismaRepository } from '@app_modules/prisma';
import { PassportUserFields } from '@app_types/index';
import { CloudinaryService } from '@cloudinary/cloudinary.service';
import { TrackWhereUniqueInput } from '@generated/track/track-where-unique.input';
import { BadRequestException, Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

import { CreateTrackInput } from './dto/create-track.input';
import { UpdateTrackInput } from './dto/update-track.input';

@Injectable()
export class TrackService {
    findAll = this.repo.findMany;
    findOne = this.repo.findUnique;
    count = this.repo.count;

    constructor(
        @InjectRepository('track') private readonly repo: PrismaRepository['track'],
        @InjectRepository('user') private readonly userRepo: PrismaRepository['user'],
        private readonly prisma: PrismaRepository,
        private readonly cloudinaryService: CloudinaryService,
    ) {}

    async create({
        data,
        trackFile,
    }: {
        data: CreateTrackInput;
        trackFile: FileUpload;
    }) {
        const trackData = await this.cloudinaryService.uploadImage(trackFile);
        const msDuration = trackData.duration * 1000;
        return this.repo.create({
            data: {
                ...data,
                trackId: trackData.public_id,
                // duration in ms (convert cloudinary's duration from seconds to milliseconds)
                duration:
                    `${msDuration}`.split('.').length > 1
                        ? +msDuration.toFixed(1)
                        : msDuration,
                artists: { connect: data.artists },
                genre: { connect: data.genre },
                album: { connect: data.album },
            },
        });
    }

    async update({
        where,
        data,
        trackFile,
    }: {
        where: TrackWhereUniqueInput;
        data: UpdateTrackInput;
        trackFile?: FileUpload;
    }) {
        let newTrackInfo = {};

        if (trackFile) {
            const newTrack = await this.cloudinaryService.uploadTrack(trackFile);
            const msDuration = newTrack.duration;
            newTrackInfo = {
                trackId: newTrack.public_id,
                duration:
                    `${msDuration}`.split('.').length > 1
                        ? +msDuration.toFixed(1)
                        : msDuration,
            };
            const oldTrack = await this.findOne({ where, rejectOnNotFound: true });
            this.cloudinaryService.deleteTracks([oldTrack.trackId]);
        }

        return this.repo.update({
            where,
            data: {
                ...data,
                ...newTrackInfo,
                genre: data.genre ? { connect: data.genre } : {},
                artists: data.artists ? { connect: data.artists } : {},
                album: data.album ? { connect: data.album } : {},
            },
        });
    }

    async remove(where: TrackWhereUniqueInput) {
        const track = await this.findOne({ where, rejectOnNotFound: true });
        this.cloudinaryService.deleteTracks([track.trackId]);
        return this.repo.delete({ where });
    }

    async isLiked(where: TrackWhereUniqueInput, user: PassportUserFields) {
        const isLiked = await this.userRepo.count({
            where: {
                id: user.id,
                likedTracks: {
                    some: where,
                },
            },
            take: 1,
        });

        return isLiked > 0;
    }

    async like(where: TrackWhereUniqueInput, user: PassportUserFields) {
        const isLiked = await this.isLiked(where, user);

        if (isLiked) throw new BadRequestException('Track is liked !');

        return this.repo.update({
            where,
            data: {
                likedBy: { connect: { id: user.id } },
                likesCount: { increment: 1 },
            },
        });
    }

    async unlike(where: TrackWhereUniqueInput, user: PassportUserFields) {
        const isLiked = await this.isLiked(where, user);

        if (!isLiked) throw new BadRequestException('Track is already not liked !');

        return this.repo.update({
            where,
            data: {
                likedBy: { disconnect: { id: user.id } },
                likesCount: { decrement: 1 },
            },
        });
    }

    async likesContain(tracks: Array<string>, user: PassportUserFields) {
        const result = await this.userRepo.findUnique({
            where: {
                id: user.id,
            },
            select: {
                id: true,
                likedTracks: { select: { id: true }, where: { id: { in: tracks } } },
            },
            rejectOnNotFound: true,
        });

        // this.prisma
        //     .$queryRaw`SELECT A FROM _TrackToUser WHERE B = ${user.id} AND A IN (${tracks})`;
        const set = new Set(result.likedTracks.map(t => t.id));
        return [...new Set([...tracks, ...set])].map(id => ({
            id,
            status: set.has(id),
        }));
    }
}
