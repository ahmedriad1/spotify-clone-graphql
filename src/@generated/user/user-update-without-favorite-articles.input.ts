import { Field, InputType } from '@nestjs/graphql';

import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';
import { ArticleUpdateManyWithoutUserInput } from '../article/article-update-many-without-user.input';
import { CommentUpdateManyWithoutAuthorInput } from '../comment/comment-update-many-without-author.input';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';
import { UserUpdateManyWithoutFollowingUsersInput } from './user-update-many-without-following-users.input';

@InputType()
export class UserUpdateWithoutFavoriteArticlesInput {
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

    @Field(() => UserUpdateManyWithoutFollowersInput, {
        nullable: true,
    })
    following?: UserUpdateManyWithoutFollowersInput;

    @Field(() => UserUpdateManyWithoutFollowingInput, {
        nullable: true,
    })
    followers?: UserUpdateManyWithoutFollowingInput;

    @Field(() => ArticleUpdateManyWithoutUserInput, {
        nullable: true,
    })
    articles?: ArticleUpdateManyWithoutUserInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    comments?: CommentUpdateManyWithoutAuthorInput;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    Article?: ArticleUpdateManyWithoutAuthorInput;

    @Field(() => CommentUpdateManyWithoutAuthorInput, {
        nullable: true,
    })
    Comment?: CommentUpdateManyWithoutAuthorInput;

    @Field(() => UserUpdateManyWithoutFollowersInput, {
        nullable: true,
    })
    followingUsers?: UserUpdateManyWithoutFollowersInput;
}
