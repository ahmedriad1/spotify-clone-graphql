import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentInput } from '../user/user-update-one-required-without-comment.input';

@InputType()
export class CommentUpdateWithoutArticleInput {
    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    id?: string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    createdAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    updatedAt?: Date | string;

    @Field(() => String, {
        nullable: true,
        description: undefined,
    })
    body?: string;

    @Field(() => UserUpdateOneRequiredWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    author?: UserUpdateOneRequiredWithoutCommentInput;
}
