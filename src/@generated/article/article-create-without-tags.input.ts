import { InputType, Field, Int } from '@nestjs/graphql';
import { UserCreateOneWithoutArticleInput } from '../user/user-create-one-without-article.input';
import { UserCreateManyWithoutFavoriteArticlesInput } from '../user/user-create-many-without-favorite-articles.input';
import { CommentCreateManyWithoutArticleInput } from '../comment/comment-create-many-without-article.input';

@InputType()
export class ArticleCreateWithoutTagsInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    slug?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    title?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    description?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string;

    @Field(() => Int, {
        nullable: true,
        description: undefined,
    })
    favoritesCount?: number;

    @Field(() => UserCreateOneWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserCreateOneWithoutArticleInput;

    @Field(() => UserCreateManyWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: UserCreateManyWithoutFavoriteArticlesInput;

    @Field(() => CommentCreateManyWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentCreateManyWithoutArticleInput;
}
