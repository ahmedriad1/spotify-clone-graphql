import { ArticleWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/ArticleWhereUniqueInput';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CurrentUser } from 'app_modules/current-user-decorator';
import {
    GraphqlAuthGuard,
    OptionalGraphqlAuthGuard,
} from 'app_modules/nestjs-passport-graphql-auth-guard';

import { ArticleService } from '../article/article.service';
import { CommentService } from './comment.service';
import { Comment } from './models/comment';
import { CreateCommentInput } from './models/create-comment.input';
import { PlainObject } from 'simplytyped';
import { GraphqlFields } from 'app_modules/nestjs-graphql-fields';
import { FindManyCommentArgs } from '@generated/type-graphql/resolvers/crud/Comment/args/FindManyCommentArgs';

@Resolver(() => Comment)
export class CommentResolver {
    constructor(
        private readonly commentService: CommentService,
        private readonly articleService: ArticleService,
    ) {}

    @Query(() => [Comment])
    @UseGuards(OptionalGraphqlAuthGuard)
    async articleComments(
        @Args('where') where: ArticleWhereUniqueInput,
        @CurrentUser() currentUser: { id: string },
        @GraphqlFields() fields: PlainObject,
    ) {
        const articleExists = (await this.articleService.count(where)) !== 0;
        if (!articleExists) {
            throw new NotFoundException(`Article ${JSON.stringify(where)} does not exist`);
        }
        return this.commentService.get({ where, follower: currentUser });
    }

    @Mutation(() => Comment)
    @UseGuards(GraphqlAuthGuard)
    async createComment(
        @Args('data') data: CreateCommentInput,
        @Args('where') where: ArticleWhereUniqueInput,
        @CurrentUser() user: { id: string },
    ) {
        const articleExists = (await this.articleService.count(where)) !== 0;
        if (!articleExists) {
            throw new NotFoundException(`Article ${JSON.stringify(where)} does not exist`);
        }
        return this.commentService.createComment(where, data.body, user.id);
    }
}
