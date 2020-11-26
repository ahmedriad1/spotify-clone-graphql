import { InputType, Field } from '@nestjs/graphql';
import { UserCreateManyWithoutFollowersInput } from './user-create-many-without-followers.input';
import { ArticleCreateManyWithoutFavoritedByInput } from '../article/article-create-many-without-favorited-by.input';
import { ArticleCreateManyWithoutAuthorInput } from '../article/article-create-many-without-author.input';
import { CommentCreateManyWithoutAuthorInput } from '../comment/comment-create-many-without-author.input';

@InputType()
export class UserCreateWithoutFollowersInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    name?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    password?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bio?: string | null;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    image?: string | null;

    @Field(() => UserCreateManyWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    following?: UserCreateManyWithoutFollowersInput;

    @Field(() => ArticleCreateManyWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleCreateManyWithoutFavoritedByInput;

    @Field(() => ArticleCreateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    Article?: ArticleCreateManyWithoutAuthorInput;

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    Comment?: CommentCreateManyWithoutAuthorInput;
}
