import { InputType, Field } from '@nestjs/graphql';
import { UserUpdateWithoutCommentInput } from './user-update-without-comment.input';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';

@InputType()
export class UserUpsertWithoutCommentInput {
    @Field(() => UserUpdateWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutCommentInput;

    @Field(() => UserCreateWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutCommentInput;
}
