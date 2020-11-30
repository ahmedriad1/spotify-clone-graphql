import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingUsersInput } from './user-create-without-following-users.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutfollowingUsersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFollowingUsersInput, {
        nullable: true,
    })
    create?: UserCreateWithoutFollowingUsersInput;
}
