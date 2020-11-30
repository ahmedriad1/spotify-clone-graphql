import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfollowingUsersInput } from './user-create-or-connect-withoutfollowing-users.input';
import { UserCreateWithoutFollowingUsersInput } from './user-create-without-following-users.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateManyWithoutFollowingUsersInput {
    @Field(() => [UserCreateWithoutFollowingUsersInput], {
        nullable: true,
    })
    create?: UserCreateWithoutFollowingUsersInput | Array<UserCreateWithoutFollowingUsersInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowingUsersInput], {
        nullable: true,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfollowingUsersInput
        | Array<UserCreateOrConnectWithoutfollowingUsersInput>;
}
