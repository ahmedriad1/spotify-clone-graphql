import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserUpdateWithoutCommentInput } from './user-update-without-comment.input';

@InputType()
export class UserUpsertWithoutCommentInput {
    @Field(() => UserUpdateWithoutCommentInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutCommentInput;

    @Field(() => UserCreateWithoutCommentInput, {
        nullable: true,
    })
    create?: UserCreateWithoutCommentInput;
}
