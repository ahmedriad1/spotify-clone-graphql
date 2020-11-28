import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutFollowingInput } from './user-create-without-following.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutfollowingInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutFollowingInput, {
        nullable: true,
    })
    create?: UserCreateWithoutFollowingInput;
}
