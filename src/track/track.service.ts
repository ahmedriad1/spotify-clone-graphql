import { InjectRepository, PrismaRepository } from '@app_modules/prisma';
import { CloudinaryService } from '@cloudinary/cloudinary.service';
import { TrackWhereUniqueInput } from '@generated/track/track-where-unique.input';
import { Injectable } from '@nestjs/common';
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
}
