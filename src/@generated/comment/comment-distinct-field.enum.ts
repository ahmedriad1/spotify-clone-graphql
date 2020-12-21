import { registerEnumType } from '@nestjs/graphql';

export enum CommentDistinctFieldEnum {
    commentId = 'commentId',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    body = 'body',
    authorId = 'authorId',
    articleId = 'articleId',
}

registerEnumType(CommentDistinctFieldEnum, {
    name: 'CommentDistinctFieldEnum',
});
