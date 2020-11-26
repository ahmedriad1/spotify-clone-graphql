import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutCommentInput } from './user-update-without-comment.input';
import { UserUpsertWithoutCommentInput } from './user-upsert-without-comment.input';
import { UserCreateOrConnectWithoutCommentInput } from './user-create-or-connect-without-comment.input';

@InputType()
export class UserUpdateOneRequiredWithoutCommentInput {
    @Field(() => UserCreateWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutCommentInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutCommentInput;

    @Field(() => UserUpsertWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    upsert?: UserUpsertWithoutCommentInput;

    @Field(() => UserCreateOrConnectWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?: UserCreateOrConnectWithoutCommentInput;
}
