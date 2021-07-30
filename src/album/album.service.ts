import { InjectRepository, PrismaRepository } from '@app_modules/prisma';
import { CloudinaryService } from '@cloudinary/cloudinary.service';
import { AlbumWhereUniqueInput } from '@generated/album/album-where-unique.input';
import { Injectable } from '@nestjs/common';
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
}
