import { InputType, Field } from '@nestjs/graphql';
import { UserCreateManyWithoutFollowingUsersInput } from './user-create-many-without-following-users.input';
import { ArticleCreateManyWithoutFavoritedByInput } from '../article/article-create-many-without-favorited-by.input';
import { ArticleCreateManyWithoutAuthorInput } from '../article/article-create-many-without-author.input';
import { CommentCreateManyWithoutAuthorInput } from '../comment/comment-create-many-without-author.input';

@InputType()
export class UserCreateWithoutFollowingUsersInput {
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

    @Field(() => UserCreateManyWithoutFollowingUsersInput, {
        nullable: true,
    })
    followers?: UserCreateManyWithoutFollowingUsersInput;

    @Field(() => ArticleCreateManyWithoutFavoritedByInput, {
        nullable: true,
    })
    favoriteArticles?: ArticleCreateManyWithoutFavoritedByInput;

    @Field(() => ArticleCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    Article?: ArticleCreateManyWithoutAuthorInput;

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    Comment?: CommentCreateManyWithoutAuthorInput;
}
