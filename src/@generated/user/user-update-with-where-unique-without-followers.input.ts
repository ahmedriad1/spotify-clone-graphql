import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    data?: UserUpdateWithoutFollowersInput;
}
