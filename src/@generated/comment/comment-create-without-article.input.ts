import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOneWithoutCommentInput } from '../user/user-create-one-without-comment.input';
import { UserCreateOneWithoutCommentsInput } from '../user/user-create-one-without-comments.input';

@InputType()
export class CommentCreateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
    })
    commentId?: string;

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

    @Field(() => UserCreateOneWithoutCommentsInput, {
        nullable: true,
    })
    author?: UserCreateOneWithoutCommentsInput;
}
