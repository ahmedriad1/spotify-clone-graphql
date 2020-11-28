import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutCommentInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCommentInput, {
        nullable: true,
    })
    create?: UserCreateWithoutCommentInput;
}
