import { InjectRepository, PrismaRepository } from '@app_modules/prisma';
import { PassportUserFields } from '@app_types/index';
import { CloudinaryService } from '@cloudinary/cloudinary.service';
import { AlbumWhereUniqueInput } from '@generated/album/album-where-unique.input';
import { BadRequestException, Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';

import { CreateAlbumInput, UpdateAlbumInput } from './dto';
import { Album } from './models/album.model';

@Injectable()
export class AlbumService {
    findAll = this.albumRepo.findMany;
    findOne = this.albumRepo.findUnique;
    count = this.albumRepo.count;

    constructor(
        @InjectRepository('album')
        private readonly albumRepo: PrismaRepository['album'],
        @InjectRepository('track')
        private readonly trackRepo: PrismaRepository['track'],
        @InjectRepository('user')
        private readonly userRepo: PrismaRepository['user'],
        private readonly cloudinaryService: CloudinaryService,
    ) {}

    async create({ data, image }: { data: CreateAlbumInput; image: FileUpload }) {
        const imageResponse = await this.cloudinaryService.uploadImage(image);

        return this.albumRepo.create({
            data: {
                ...data,
                imageId: imageResponse.public_id,
                genre: { connect: { id: data.genre.id } },
                artists: { connect: data.artists },
            },
        });
    }

    async tracksDuration(album: Album) {
        const result = await this.trackRepo.aggregate({
            _sum: {
                duration: true,
            },
            where: {
                album: {
                    id: album.id,
                },
            },
        });

        return result._sum.duration;
    }

    async update({
        where,
        data,
        image,
        select,
    }: {
        where: AlbumWhereUniqueInput;
        data: UpdateAlbumInput;
        image?: FileUpload;
        select: any;
    }) {
        const album = await this.findOne({ where, rejectOnNotFound: true });

        // if (album.artistId !== artist.id)
        //     throw new UnauthorizedException('Album does not belong to artist');

        let newImageId;

        if (image) {
            newImageId = (await this.cloudinaryService.uploadImage(image)).public_id;
            if (album.imageId) this.cloudinaryService.deleteImages([album.imageId]);
        }

        return this.albumRepo.update({
            data: {
                ...data,
                imageId: newImageId,
                genre: data.genre?.id ? { connect: data.genre } : {},
                artists: data.artists,
            },
            where,
            select,
        });
    }

    async remove(where: AlbumWhereUniqueInput) {
        const album = await this.findOne({ where, rejectOnNotFound: true });
        if (album.imageId) this.cloudinaryService.deleteImages([album.imageId]);
        return this.albumRepo.delete({ where });
    }

    async isLiked(where: AlbumWhereUniqueInput, user: PassportUserFields) {
        const isLiked = await this.userRepo.count({
            where: {
                id: user.id,
                likedAlbums: {
                    some: where,
                },
            },
            take: 1,
        });

        return isLiked > 0;
    }

    async like(where: AlbumWhereUniqueInput, user: PassportUserFields) {
        const isLiked = await this.isLiked(where, user);

        if (isLiked) throw new BadRequestException('Track is liked !');

        return this.albumRepo.update({
            where,
            data: {
                likedBy: { connect: { id: user.id } },
                likesCount: { increment: 1 },
            },
        });
    }

    async unlike(where: AlbumWhereUniqueInput, user: PassportUserFields) {
        const isLiked = await this.isLiked(where, user);

        if (!isLiked) throw new BadRequestException('Track is already not liked !');

        return this.albumRepo.update({
            where,
            data: {
                likedBy: { disconnect: { id: user.id } },
                likesCount: { decrement: 1 },
            },
        });
    }

    async likesContain(albums: Array<string>, user: PassportUserFields) {
        const result = await this.userRepo.findUnique({
            where: {
                id: user.id,
            },
            select: {
                id: true,
                likedAlbums: { select: { id: true }, where: { id: { in: albums } } },
            },
            rejectOnNotFound: true,
        });

        // this.prisma
        //     .$queryRaw`SELECT A FROM _TrackToUser WHERE B = ${user.id} AND A IN (${tracks})`;
        const set = new Set(result.likedAlbums.map(t => t.id));
        return [...new Set([...albums, ...set])].map(id => ({
            id,
            status: set.has(id),
        }));
    }
}
