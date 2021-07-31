import { CurrentUser } from '@app_modules/current-user-decorator/index';
import { GraphqlAuthGuard } from '@app_modules/nestjs-passport-graphql-auth-guard/graphql-auth.guard';
import { LikesContain, PassportUserFields } from '@app_types/index';
import { ArtistService } from '@artist/artist.service';
import { AlbumWhereInput } from '@generated/album/album-where.input';
import { AlbumWhereUniqueInput } from '@generated/album/album-where-unique.input';
import { UseGuards } from '@nestjs/common';
import {
    Args,
    Float,
    Info,
    Int,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { GraphQLUpload } from 'apollo-server-express';
import { GraphQLResolveInfo } from 'graphql';
import { FileUpload } from 'graphql-upload';

import { AppEnvironment } from '../app.environment';
import { AlbumService } from './album.service';
// eslint-disable-next-line boundaries/element-types
import { CreateAlbumInput, UpdateAlbumInput } from './dto';
import { Album } from './models/album.model';

@Resolver(() => Album)
export class AlbumResolver {
    private readonly defaultFields = {
        Album: {
            id: true,
            imageId: true,
        },
    };

    constructor(
        private readonly albumService: AlbumService,
        private readonly artistService: ArtistService,
        private readonly appEnvironment: AppEnvironment,
    ) {}

    @Query(() => [Album])
    async albums(
        @Args({ defaultValue: 1, name: 'page', type: () => Int }) page = 1,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @Info() info: GraphQLResolveInfo,
    ) {
        this.appEnvironment.cloudinaryCloudName;
        const select = new PrismaSelect(info, {
            defaultFields: this.defaultFields,
        }).value.select;
        return this.albumService.findAll({
            select,
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    @Query(() => Album)
    async album(
        @Args('where') where: AlbumWhereUniqueInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: this.defaultFields,
        }).value.select;
        return this.albumService.findOne({ where, select, rejectOnNotFound: true });
    }

    @Mutation(() => Album)
    @UseGuards(GraphqlAuthGuard)
    async createAlbum(
        @Args('data') data: CreateAlbumInput,
        @Args({ name: 'image', type: () => GraphQLUpload }) image: FileUpload,
        // @CurrentUser() user,
    ) {
        console.log(image);

        // const artist = await this.artistService.findOne({
        //     where: { userId: user.id },
        //     rejectOnNotFound: true,
        // });

        return this.albumService.create({ data, image });
    }

    @Mutation(() => Album)
    @UseGuards(GraphqlAuthGuard)
    async updateAlbum(
        @Args('where') where: AlbumWhereUniqueInput,
        @Args('data') data: UpdateAlbumInput,
        // @CurrentUser() user,
        @Info() info: GraphQLResolveInfo,
        @Args({ name: 'image', type: () => GraphQLUpload, nullable: true })
        image?: FileUpload,
    ) {
        // const artist = await this.artistService.findOne({
        //     where: { userId: user.id },
        //     rejectOnNotFound: true,
        // });

        const select = new PrismaSelect(info, {
            defaultFields: this.defaultFields,
        }).value.select;

        return this.albumService.update({
            where,
            data,
            image,
            select,
        });
    }

    @Mutation(() => Album)
    async removeAlbum(@Args('where') where: AlbumWhereUniqueInput) {
        return this.albumService.remove(where);
    }

    @Mutation(() => Album)
    @UseGuards(GraphqlAuthGuard)
    async likeAlbum(
        @Args('where') where: AlbumWhereUniqueInput,
        @CurrentUser() user: PassportUserFields,
    ) {
        return this.albumService.like(where, user);
    }

    @Mutation(() => Album)
    @UseGuards(GraphqlAuthGuard)
    async unlikeAlbum(
        @Args('where') where: AlbumWhereUniqueInput,
        @CurrentUser() user: PassportUserFields,
    ) {
        return this.albumService.unlike(where, user);
    }

    @Query(() => [LikesContain])
    @UseGuards(GraphqlAuthGuard)
    async albumLikesContain(
        @Args({ name: 'tracks', type: () => [String], nullable: false })
        tracks: Array<string>,
        @CurrentUser() user: PassportUserFields,
    ) {
        return this.albumService.likesContain(tracks, user);
    }

    @ResolveField(() => String, { nullable: true })
    async imageUrl(@Parent() _: Album) {
        return _.imageId
            ? `${this.appEnvironment.cloudinaryBaseUrl()}/image/upload/${_.imageId}`
            : undefined;
    }

    @ResolveField(() => Float, { nullable: true })
    async tracksDuration(@Parent() _: Album) {
        return this.albumService.tracksDuration(_);
    }

    @Query(() => Number)
    async totalAlbums(
        @Args({ name: 'where', nullable: true }) where?: AlbumWhereInput,
    ) {
        return this.albumService.count({ where });
    }
}
