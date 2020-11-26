import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutCommentInput } from './user-create-without-comment.input';

@InputType()
export class UserCreateOrConnectWithoutCommentInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutCommentInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutCommentInput;
}
