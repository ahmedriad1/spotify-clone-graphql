import { InputType, Field } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutFollowersInput } from './user-update-without-followers.input';
import { UserCreateWithoutFollowersInput } from './user-create-without-followers.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutFollowersInput {
    @Field(() => UserWhereUniqueInput, {
        nullable: true,
        description: undefined,
    })
    where?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    update?: UserUpdateWithoutFollowersInput;

    @Field(() => UserCreateWithoutFollowersInput, {
        nullable: true,
        description: undefined,
    })
    create?: UserCreateWithoutFollowersInput;
}
