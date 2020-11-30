import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Article } from '../article/article.model';

@ObjectType({})
export class Comment {
    @Field(() => ID, {
        nullable: false,
    })
    commentId!: string;

    @Field(() => String, {
        nullable: false,
    })
    createdAt!: Date | string;

    @Field(() => String, {
        nullable: false,
    })
    updatedAt!: Date | string;

    @Field(() => String, {
        nullable: false,
    })
    body!: string;

    @Field(() => User, {
        nullable: false,
    })
    author!: User;

    @Field(() => String, {
        nullable: false,
    })
    readonly authorId!: string;

    @Field(() => Article, {
        nullable: true,
    })
    article?: Article;

    @Field(() => String, {
        nullable: true,
    })
    readonly articleId?: string;
}
