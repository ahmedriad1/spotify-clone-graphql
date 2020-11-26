import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';

@ObjectType({
    description: undefined,
})
export class User {
    @Field(() => ID, {
        nullable: false,
        description: undefined,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    email!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    name!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    password!: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    bio?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    image?: string;

    @Field(() => [User], {
        nullable: true,
        description: undefined,
    })
    following?: Array<User>;

    @Field(() => [User], {
        nullable: true,
        description: undefined,
    })
    followers?: Array<User>;

    @Field(() => [Article], {
        nullable: true,
        description: undefined,
    })
    favoriteArticles?: Array<Article>;

    @Field(() => [Article], {
        nullable: true,
        description: undefined,
    })
    Article?: Array<Article>;

    @Field(() => [Comment], {
        nullable: true,
        description: undefined,
    })
    Comment?: Array<Comment>;
}
