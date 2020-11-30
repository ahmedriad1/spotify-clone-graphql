import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateWithoutFollowingUsersInput } from './user-update-without-following-users.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowingUsersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingUsersInput, {
        nullable: true,
    })
    data?: UserUpdateWithoutFollowingUsersInput;
}
