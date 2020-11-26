import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateManyWithoutFollowersInput } from './user-update-many-without-followers.input';
import { UserUpdateManyWithoutFollowingInput } from './user-update-many-without-following.input';
import { ArticleUpdateManyWithoutFavoritedByInput } from '../article/article-update-many-without-favorited-by.input';
import { ArticleUpdateManyWithoutAuthorInput } from '../article/article-update-many-without-author.input';

@InputType()
export class UserUpdateWithoutCommentInput {
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

    @Field(() => UserUpdateManyWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    following?: UserUpdateManyWithoutFollowersInput;

    @Field(() => UserUpdateManyWithoutFollowingInput, {
        nullable: true,
        description: undefined,
    })
    followers?: UserUpdateManyWithoutFollowingInput;

    @Field(() => ArticleUpdateManyWithoutFavoritedByInput, {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: ArticleUpdateManyWithoutFavoritedByInput;

    @Field(() => ArticleUpdateManyWithoutAuthorInput, {
        nullable: true,
        description: undefined,
    })
    Article?: ArticleUpdateManyWithoutAuthorInput;
}
