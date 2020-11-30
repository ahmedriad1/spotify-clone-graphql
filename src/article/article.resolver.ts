import { ArticleWhereInput } from '@generated/article/article-where.input';
import { ArticleWhereUniqueInput } from '@generated/article/article-where-unique.input';
import { FindManyArticleArgs } from '@generated/article/find-many-article.args';
import { ConflictException, NotFoundException, UseGuards } from '@nestjs/common';
import {
    Args,
    Info,
    Int,
    Mutation,
    Parent,
    Query,
    ResolveField,
    ResolveProperty,
    Resolver,
} from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { CurrentUser } from 'app_modules/current-user-decorator';
import { GraphqlFields } from 'app_modules/nestjs-graphql-fields';
import {
    GraphqlAuthGuard,
    OptionalGraphqlAuthGuard,
} from 'app_modules/nestjs-passport-graphql-auth-guard';
import { PlainObject } from 'simplytyped';

import { PassportUserFields } from '../auth/models/passport-user-fields';
import { ArticleService } from './article.service';
import { AuthorGuard } from './author.guard';
import { Article } from './models/article';
import { ArticleCreateInput } from './models/article-create.input';
import { ArticleUpdateInput } from './models/article-update.input';

/**
 * Resolver for article type.
 */
@Resolver(() => Article)
export class ArticleResolver {
    constructor(private readonly service: ArticleService) {}

    @Query(() => [Article])
    async articles(@Args() args: FindManyArticleArgs, @Info() info) {
        const result = await this.service.findMany({
            where: args.where as Prisma.ArticleWhereInput,
            ...new PrismaSelect(info).value,
        });
        return result;
    }

    @Query(() => Int)
    @UseGuards(OptionalGraphqlAuthGuard)
    async countArticles(
        @Args({ name: 'where', nullable: true, type: () => ArticleWhereInput })
        where: ArticleWhereInput,
        @Args({ name: 'feed', nullable: true, type: () => Boolean })
        feed: boolean,
        @CurrentUser() currentUser?: PassportUserFields,
    ) {
        if (feed && currentUser) {
            where = this.service.feedWhereConditions(currentUser.id);
        }
        return this.service.count(where as Prisma.ArticleWhereInput);
    }

    @Query(() => Article, { nullable: true })
    @UseGuards(OptionalGraphqlAuthGuard)
    async article(@Args('where') where: ArticleWhereUniqueInput, @Info() info) {
        return this.service.findUnique({
            where,
            ...new PrismaSelect(info).value,
        });
    }

    @Query(() => [Article], { nullable: false })
    @UseGuards(GraphqlAuthGuard)
    async feed(
        @Args({ defaultValue: 0, name: 'offset', type: () => Int }) offset = 0,
        @Args({ defaultValue: 20, name: 'limit', type: () => Int }) limit = 20,
        @CurrentUser() user: PassportUserFields,
        @GraphqlFields() fields: PlainObject,
    ) {
        return this.service.findMany({
            where: this.service.feedWhereConditions(user.id),
            include: {
                author: Boolean(fields.author),
                tags: Boolean(fields.tags),
                favoritedBy: fields.favorited
                    ? {
                          take: 1,
                          select: { userId: true },
                          where: { userId: user.id },
                      }
                    : false,
            },
            orderBy: { articleId: 'desc' },
            skip: offset,
            take: limit,
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

    @Mutation(() => Article)
    @UseGuards(GraphqlAuthGuard, AuthorGuard)
    async updateArticle(
        @Args('data') data: ArticleUpdateInput,
        @Args('where') where: ArticleWhereUniqueInput,
        @GraphqlFields() fields: PlainObject,
    ) {
        const article = await this.service.findUnique({ where });
        if (!article) {
            throw new NotFoundException(`Article ${JSON.stringify(where)} do not exists`);
        }
        return this.service.updateArticle({
            input: data,
            article,
            include: {
                author: Boolean(fields.author),
                tags: Boolean(fields.tags),
            },
        });
    }

    @Mutation(() => Article, { nullable: true })
    @UseGuards(GraphqlAuthGuard, AuthorGuard)
    async deleteArticle(
        @Args('where') where: ArticleWhereUniqueInput,
        @GraphqlFields() fields: PlainObject,
    ) {
        const article = await this.service.findUnique({ where });
        if (!article) {
            throw new NotFoundException(`Article ${JSON.stringify(where)} do not exists`);
        }
        return this.service.delete({
            where,
            include: {
                author: Boolean(fields.author),
                tags: Boolean(fields.tags),
            },
        });
    }

    @Mutation(() => Article)
    @UseGuards(GraphqlAuthGuard)
    async favoriteArticle(
        @Args('where') where: ArticleWhereUniqueInput,
        @Args('value') value: boolean,
        @GraphqlFields() fields: PlainObject,
        @CurrentUser() currentUser: PassportUserFields,
    ) {
        const article = await this.service.findUnique({
            where,
            include: {
                favoritedBy: {
                    take: 1,
                    where: { userId: currentUser.id },
                },
            },
        });
        if (!article) {
            throw new NotFoundException(`Article do not exists`);
        }
        if (value && article.favoritedBy.length > 0) {
            throw new ConflictException(`Article is already in favorite list`);
        }
        if (!value && article.favoritedBy.length === 0) {
            throw new ConflictException(`Article is not in favorite list`);
        }
        return this.service.favorite({
            article,
            favoritedByUserId: currentUser.id,
            value,
            include: {
                author: Boolean(fields.author),
                tags: Boolean(fields.tags),
            },
        });
    }

    /**
     * Checks if article is favorited by current user.
     */
    @ResolveField(() => Boolean)
    async favorited(
        @Parent() article: Article,
        @CurrentUser() currentUser?: PassportUserFields,
    ): Promise<boolean> {
        if (!currentUser) {
            return false;
        }
        if (Array.isArray(article.favoritedBy)) {
            return article.favoritedBy.some((user) => user.userId === currentUser.id);
        }
        return this.service.isFavorited(article.articleId, currentUser.id);
    }

    @ResolveField(() => String)
    async updatedAt(@Parent() article: Article) {
        return new Date(article.updatedAt).toISOString();
    }

    @ResolveField(() => String)
    async createdAt(@Parent() article: Article) {
        return new Date(article.createdAt).toISOString();
    }
}
