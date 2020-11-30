import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingUsersInput } from './user-update-without-following-users.input';
import { UserCreateWithoutFollowingUsersInput } from './user-create-without-following-users.input';

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
