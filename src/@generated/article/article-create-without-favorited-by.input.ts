import { Field, InputType, Int } from '@nestjs/graphql';

import { CommentCreateManyWithoutArticleInput } from '../comment/comment-create-many-without-article.input';
import { TagCreateManyWithoutArticlesInput } from '../tag/tag-create-many-without-articles.input';
import { UserCreateOneWithoutArticleInput } from '../user/user-create-one-without-article.input';
import { UserCreateOneWithoutArticlesInput } from '../user/user-create-one-without-articles.input';

@InputType()
export class ArticleCreateWithoutFavoritedByInput {
    @Field(() => String, {
        nullable: true,
    })
    articleId?: string;

    @Field(() => String, {
        nullable: true,
    })
    slug?: string;

    @Field(() => String, {
        nullable: true,
    })
    title?: string;

    @Field(() => String, {
        nullable: true,
    })
    description?: string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
    })
    favoritesCount?: number;

    @Field(() => TagCreateManyWithoutArticlesInput, {
        nullable: true,
    })
    tags?: TagCreateManyWithoutArticlesInput;

    @Field(() => UserCreateOneWithoutArticleInput, {
        nullable: true,
    })
    author?: UserCreateOneWithoutArticleInput;

    @Field(() => CommentCreateManyWithoutArticleInput, {
        nullable: true,
    })
    comments?: CommentCreateManyWithoutArticleInput;

    @Field(() => UserCreateOneWithoutArticlesInput, {
        nullable: true,
    })
    User?: UserCreateOneWithoutArticlesInput;
}
