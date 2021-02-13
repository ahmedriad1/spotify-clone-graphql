import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOneWithoutCommentInput {
    @Field(() => UserCreateWithoutCommentInput, {
        nullable: true,
    })
    create?: UserCreateWithoutCommentInput;

    @Field(() => UserCreateOrConnectWithoutCommentInput, {
        nullable: true,
    })
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    connect?: UserWhereUniqueInput;
}
