import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOneWithoutCommentInput } from '../user/user-create-one-without-comment.input';

@InputType()
export class CommentCreateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
    })
    body?: string;

    @Field(() => UserCreateOneWithoutCommentInput, {
        nullable: true,
    })
    author?: UserCreateOneWithoutCommentInput;
}
