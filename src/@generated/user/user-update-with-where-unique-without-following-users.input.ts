import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowingUsersInput } from './user-update-without-following-users.input';

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
