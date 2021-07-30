import { CurrentUser } from '@app_modules/current-user-decorator';
import { GraphqlAuthGuard } from '@app_modules/nestjs-passport-graphql-auth-guard/graphql-auth.guard';
import { ArtistWhereInput } from '@generated/artist/artist-where.input';
import { ArtistWhereUniqueInput } from '@generated/artist/artist-where-unique.input';
import { UseGuards } from '@nestjs/common';
import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { UserModel } from '@user/models/user.model';
import { GraphQLUpload } from 'apollo-server-express';
import { GraphQLResolveInfo } from 'graphql';
import { FileUpload } from 'graphql-upload';

import { ArtistService } from './artist.service';
// eslint-disable-next-line boundaries/element-types
import { CreateArtistInput, UpdateArtistInput } from './dto';
import { Artist } from './models/artist.model';

@Resolver(() => Artist)
export class ArtistResolver {
    constructor(private readonly artistService: ArtistService) {}

    @Query(() => [Artist])
    async artists(
        @Args({ defaultValue: 1, name: 'page', type: () => Int }) page = 1,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                Artist: { id: true },
            },
        }).value.select;

        return this.artistService.findAll({
            select,
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    @Query(() => Artist)
    async artist(
        @Args('where') where: ArtistWhereUniqueInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                Artist: { id: true },
            },
        }).value.select;

        return this.artistService.findOne({
            where,
            select,
            rejectOnNotFound: true,
        });
    }

    @UseGuards(GraphqlAuthGuard)
    @Mutation(() => Artist)
    async createArtist(
        @Args('data') data: CreateArtistInput,
        @CurrentUser() user: UserModel,
        @Info() info: GraphQLResolveInfo,
        @Args({ name: 'image', type: () => GraphQLUpload, nullable: true })
        image?: FileUpload,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                Artist: { id: true },
            },
        }).value.select;
        return this.artistService.create({
            data,
            user,
            select,
            image,
        });
    }

    @Mutation(() => Artist)
    async updateArtist(
        @Args('where') where: ArtistWhereUniqueInput,
        @Args('data') data: UpdateArtistInput,
        @Info() info: GraphQLResolveInfo,
        @Args({ name: 'image', type: () => GraphQLUpload, nullable: true })
        image?: FileUpload,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                Artist: { id: true },
            },
        }).value.select;

        return this.artistService.update({ where, data, select, image });
    }

    @Mutation(() => Artist)
    async removeArtist(
        @Args('where') where: ArtistWhereUniqueInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                Artist: { id: true },
            },
        }).value.select;

        return this.artistService.remove({ where, select });
    }

    @Query(() => Number)
    async totalArtists(
        @Args({ name: 'where', nullable: true }) where?: ArtistWhereInput,
    ) {
        return this.artistService.count({ where });
    }
}
