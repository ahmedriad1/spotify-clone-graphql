import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutFollowingUsersInput } from './user-create-without-following-users.input';

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
