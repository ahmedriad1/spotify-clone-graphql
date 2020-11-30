import { InputType, Field } from '@nestjs/graphql';
import { UserCreateManyWithoutFollowersInput } from './user-create-many-without-followers.input';
import { UserCreateManyWithoutFollowingInput } from './user-create-many-without-following.input';
import { ArticleCreateManyWithoutFavoritedByInput } from '../article/article-create-many-without-favorited-by.input';
import { ArticleCreateManyWithoutUserInput } from '../article/article-create-many-without-user.input';
import { CommentCreateManyWithoutAuthorInput } from '../comment/comment-create-many-without-author.input';
import { UserCreateManyWithoutFollowingUsersInput } from './user-create-many-without-following-users.input';

@InputType()
export class UserCreateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
    })
    userId?: string;

    @Field(() => String, {
        nullable: true,
    })
    email?: string;

    @Field(() => String, {
        nullable: true,
    })
    name?: string;

    @Field(() => String, {
        nullable: true,
    })
    password?: string;

    @Field(() => String, {
        nullable: true,
    })
    bio?: string | null;

    @Field(() => String, {
        nullable: true,
    })
    image?: string | null;

    @Field(() => UserCreateManyWithoutFollowersInput, {
        nullable: true,
    })
    following?: UserCreateManyWithoutFollowersInput;

    @Field(() => UserCreateManyWithoutFollowingInput, {
        nullable: true,
    })
    followers?: UserCreateManyWithoutFollowingInput;

    @Field(() => ArticleCreateManyWithoutFavoritedByInput, {
        nullable: true,
    })
    favoriteArticles?: ArticleCreateManyWithoutFavoritedByInput;

    @Field(() => ArticleCreateManyWithoutUserInput, {
        nullable: true,
    })
    articles?: ArticleCreateManyWithoutUserInput;

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    comments?: CommentCreateManyWithoutAuthorInput;

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    Comment?: CommentCreateManyWithoutAuthorInput;

    @Field(() => UserCreateManyWithoutFollowersInput, {
        nullable: true,
    })
    followingUsers?: UserCreateManyWithoutFollowersInput;
}
