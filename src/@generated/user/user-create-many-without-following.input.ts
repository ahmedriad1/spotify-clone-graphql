import { InputType, Field } from '@nestjs/graphql';
import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateOrConnectWithoutfollowingInput } from './user-create-or-connect-withoutfollowing.input';

@InputType()
export class UserCreateManyWithoutFollowingInput {
    @Field(() => [UserCreateWithoutFollowingInput], {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowingInput | Array<UserCreateWithoutFollowingInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
        description: undefined,
    })
    connect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowingInput], {
        nullable: true,
        description: undefined,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfollowingInput
        | Array<UserCreateOrConnectWithoutfollowingInput>;
}
