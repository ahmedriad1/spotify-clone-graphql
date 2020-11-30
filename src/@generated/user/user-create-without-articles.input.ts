import { InputType, Field } from '@nestjs/graphql';
import { UserCreateManyWithoutFollowersInput } from './user-create-many-without-followers.input';
import { UserCreateManyWithoutFollowingInput } from './user-create-many-without-following.input';
import { ArticleCreateManyWithoutFavoritedByInput } from '../article/article-create-many-without-favorited-by.input';
import { CommentCreateManyWithoutAuthorInput } from '../comment/comment-create-many-without-author.input';
import { ArticleCreateManyWithoutAuthorInput } from '../article/article-create-many-without-author.input';

@InputType()
export class UserCreateWithoutArticlesInput {
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

    @Field(() => CommentCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    comments?: CommentCreateManyWithoutAuthorInput;

    @Field(() => ArticleCreateManyWithoutAuthorInput, {
        nullable: true,
    })
    Article?: ArticleCreateManyWithoutAuthorInput;
}
