import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { UserUpdateManyWithoutFollowingUsersInput } from './user-update-many-without-following-users.input';

@InputType()
export class UserUpdateWithoutFollowingUsersInput {
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

    @Field(() => UserUpdateManyWithoutFollowingUsersInput, {
        nullable: true,
    })
    followers?: UserUpdateManyWithoutFollowingUsersInput;

    @Field(() => ArticleUpdateManyWithoutFavoritedByInput, {
        nullable: true,
    })
    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    Article?: ArticleUpdateManyWithoutAuthorInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    Comment?: CommentUpdateManyWithoutAuthorInput;
}
