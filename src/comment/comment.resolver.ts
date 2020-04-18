import { ArticleWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/ArticleWhereUniqueInput';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'app_modules/current-user-decorator';
import { GraphqlAuthGuard } from 'app_modules/nestjs-passport-graphql-auth-guard';

import { ArticleService } from '../article/article.service';
import { CommentService } from './comment.service';
import { Comment } from './models/comment';
import { CreateCommentInput } from './models/create-comment.input';

@Resolver(() => Comment)
export class CommentResolver {
    constructor(
        private readonly commentService: CommentService,
        private readonly articleService: ArticleService,
    ) {}

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
