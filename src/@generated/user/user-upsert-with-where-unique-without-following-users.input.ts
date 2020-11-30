import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingUsersInput } from './user-create-without-following-users.input';
import { UserUpdateWithoutFollowingUsersInput } from './user-update-without-following-users.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowingUsersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowingUsersInput, {
        nullable: true,
    })
    update?: UserUpdateWithoutFollowingUsersInput;

    @Field(() => UserCreateWithoutFollowingUsersInput, {
        nullable: true,
    })
    create?: UserCreateWithoutFollowingUsersInput;
}
