import { FindManyArticleArgs } from '@generated/type-graphql/resolvers/crud/Article/args/FindManyArticleArgs';
import { ArticleWhereInput } from '@generated/type-graphql/resolvers/inputs/ArticleWhereInput';
import { ArticleWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/ArticleWhereUniqueInput';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'app_modules/current-user-decorator';
import { GraphqlFields } from 'app_modules/nestjs-graphql-fields';
import {
    GraphqlAuthGuard,
    OptionalGraphqlAuthGuard,
} from 'app_modules/nestjs-passport-graphql-auth-guard';
import { PlainObject } from 'simplytyped';
import { Int } from 'type-graphql';

import { PassportUserFields } from '../auth/models/passport-user-fields';
import { ArticleService } from './article.service';
import { Article } from './models/article';
import { ArticleCreateInput } from './models/article-create-input';

/**
 * Article resolver.
 */
@Resolver(() => Article)
export class ArticleResolver {
    constructor(private readonly service: ArticleService) {}

    @Query(() => [Article])
    async articles(@Args() args: FindManyArticleArgs, @GraphqlFields() fields: PlainObject) {
        return this.service.findMany({
            ...args,
            include: {
                author: Boolean(fields.author),
                tags: Boolean(fields.tags),
            },
        });
    }

    @Query(() => Int)
    async countArticles(@Args('where') where: ArticleWhereInput) {
        return this.service.count(where);
    }

    @Query(() => Article, { nullable: true })
    @UseGuards(OptionalGraphqlAuthGuard)
    async article(
        @Args('where') where: ArticleWhereUniqueInput,
        @GraphqlFields() fields: PlainObject,
    ) {
        return this.service.findOne({
            where,
            include: {
                author: Boolean(fields.author),
                tags: Boolean(fields.tags),
            },
        });
    }

    @Query(() => [Article], { nullable: false })
    @UseGuards(GraphqlAuthGuard)
    async feed(
        @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @CurrentUser() user: { id: string },
        @GraphqlFields() fields: PlainObject,
    ) {
        console.log('user', user);
        return this.service.findMany({
            where: {
                author: {
                    followers: { some: { id: { equals: user.id } } },
                },
            },
            include: {
                author: Boolean(fields.author),
                tags: Boolean(fields.tags),
            },
            orderBy: { id: 'desc' },
            skip: offset,
            first: limit,
        });
    }

    @Mutation(() => Article)
    @UseGuards(GraphqlAuthGuard)
    async createArticle(
        @Args('input') input: ArticleCreateInput,
        @CurrentUser() author: { id: string },
    ) {
        return this.service.create({ input, author });
    }

    // @ResolveProperty(() => [String])
    // tagList(@Parent() article: Article): string[] {
    //     if (!Array.isArray(article.tags)) {
    //         throw new TypeError('tags must be selected');
    //     }
    //     return article.tags.map(tag => tag.name);
    // }

    /**
     * Check if article is favorited by current user.
     * TODO: Implement me.
     */
    @ResolveProperty(() => Boolean)
    async favorited(
        @Parent() article: Article,
        @CurrentUser() currentUser?: PassportUserFields,
    ): Promise<boolean> {
        return false;
    }
}
