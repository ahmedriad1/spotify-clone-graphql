import { registerEnumType } from '@nestjs/graphql';

export enum ArticleDistinctFieldEnum {
    id = 'id',
    slug = 'slug',
    title = 'title',
    description = 'description',
    body = 'body',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    favoritesCount = 'favoritesCount',
    authorId = 'authorId',
}

registerEnumType(ArticleDistinctFieldEnum, {
    name: 'ArticleDistinctFieldEnum',
    description: undefined,
});
