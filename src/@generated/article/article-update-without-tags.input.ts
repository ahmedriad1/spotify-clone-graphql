import { InputType, Field, Int } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutArticleInput } from '../user/user-update-one-required-without-article.input';
import { UserUpdateManyWithoutFavoriteArticlesInput } from '../user/user-update-many-without-favorite-articles.input';
import { CommentUpdateManyWithoutArticleInput } from '../comment/comment-update-many-without-article.input';

@InputType()
export class ArticleUpdateWithoutTagsInput {
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

    @Field(() => UserUpdateOneRequiredWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserUpdateOneRequiredWithoutArticleInput;

    @Field(() => UserUpdateManyWithoutFavoriteArticlesInput, {
        nullable: true,
        description: undefined,
    })
    favoritedBy?: UserUpdateManyWithoutFavoriteArticlesInput;

    @Field(() => CommentUpdateManyWithoutArticleInput, {
        nullable: true,
        description: undefined,
    })
    comments?: CommentUpdateManyWithoutArticleInput;
}
