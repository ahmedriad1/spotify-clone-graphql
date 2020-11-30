import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';

@InputType()
export class UserCreateOneWithoutCommentInput {
    @Field(() => UserCreateWithoutCommentInput, {
        nullable: true,
    })
    create?: UserCreateWithoutCommentInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserCreateOrConnectWithoutCommentInput, {
        nullable: true,
    })
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
}
