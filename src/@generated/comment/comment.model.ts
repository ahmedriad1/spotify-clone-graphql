import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Article } from '../article/article.model';

@ObjectType({
    description: undefined,
})
export class Comment {
    @Field(() => ID, {
        nullable: false,
        description: undefined,
    })
    id!: string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    createdAt!: Date | string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    updatedAt!: Date | string;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    body!: string;

    @Field(() => User, {
        nullable: false,
        description: undefined,
    })
    author!: User;

    @Field(() => String, {
        nullable: false,
        description: undefined,
    })
    readonly authorId!: string;

    @Field(() => Article, {
        nullable: true,
        description: undefined,
    })
    Article?: Article;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    readonly articleId?: string;
}