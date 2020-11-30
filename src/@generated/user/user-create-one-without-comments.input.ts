import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutCommentsInput } from './user-create-without-comments.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateOrConnectWithoutcommentsInput } from './user-create-or-connect-withoutcomments.input';

@InputType()
export class UserCreateOneWithoutCommentsInput {
    @Field(() => UserCreateWithoutCommentsInput, {
        nullable: true,
    })
    create?: UserCreateWithoutCommentsInput;

    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    connect?: UserWhereUniqueInput;

    @Field(() => UserCreateOrConnectWithoutcommentsInput, {
        nullable: true,
    })
    connectOrCreate?: UserCreateOrConnectWithoutcommentsInput;
}
