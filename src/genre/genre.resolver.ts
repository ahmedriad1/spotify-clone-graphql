import { GenreWhereUniqueInput } from '@generated/genre/genre-where-unique.input';
// import { NotFoundException } from '@nestjs/common';
import { Args, Info, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
// import { Prisma } from '@prisma/client';
// import {
//     GraphqlAuthGuard,
//     OptionalGraphqlAuthGuard,
// } from 'app_modules/nestjs-passport-graphql-auth-guard';
import { GraphQLResolveInfo } from 'graphql';

import { GenreWhereInput } from './../@generated/genre/genre-where.input';
// eslint-disable-next-line boundaries/element-types
import { GenreCreateInput, GenreUpdateInput } from './dto';
import { GenreService } from './genre.service';
// import { GraphQLContext, PassportUserFields } from '../types';
import { Genre } from './models/genre.model';

/**
 * Resolves user object type.
 */
@Resolver(() => Genre)
export class GenreResolver {
    private readonly defaultFields = {
        Genre: { id: true },
        Album: {
            id: true,
            imageId: true,
        },
    };

    constructor(private readonly genreService: GenreService) {}

    @Query(() => [Genre])
    async genres(
        @Args({ defaultValue: 1, name: 'page', type: () => Int }) page = 1,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: this.defaultFields,
        }).value.select;
        return this.genreService.findMany({
            select,
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    @Query(() => Genre)
    async genre(
        @Args('where') where: GenreWhereUniqueInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: this.defaultFields,
        }).value.select;

        return this.genreService.findUnique({
            select,
            where,
            rejectOnNotFound: true,
        });
    }

    @Mutation(() => Genre)
    async createGenre(@Args('data') data: GenreCreateInput) {
        return await this.genreService.createGenre(data);
    }

    @Mutation(() => Genre)
    async updateGenre(
        @Args('data') data: GenreUpdateInput,
        @Args('where') where: GenreWhereUniqueInput,
    ) {
        const genre = await this.genreService.findUnique({
            where,
            rejectOnNotFound: true,
        });

        return this.genreService.update({
            data,
            where: { id: genre.id },
        });
    }

    // @Mutation(() => User)
    // @UseGuards(GraphqlAuthGuard)
    // async updateUser(
    //     @Args('data') data: UserUpdateInput,
    //     @CurrentUser() user: PassportUserFields,
    // ) {
    //     return this.userService.update({ id: user.id }, data as Prisma.UserUpdateInput);
    // }

    // @ResolveField(() => String, { nullable: true })
    // async token(@Parent() _: User, @Context() context: GraphQLContext) {
    //     return context.token;
    // }

    // @ResolveField(() => Float, { nullable: true })
    // async refreshToken(@Parent() _: Genre, @Context() context: GraphQLContext) {
    //     return context.refreshToken;
    // }

    @Query(() => Number)
    async totalGenres(
        @Args({ name: 'where', nullable: true }) where?: GenreWhereInput,
    ) {
        return this.genreService.count({ where });
    }
}
