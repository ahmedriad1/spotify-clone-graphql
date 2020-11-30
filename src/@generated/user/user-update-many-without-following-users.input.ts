import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutfollowingUsersInput } from './user-create-or-connect-withoutfollowing-users.input';
import { UserCreateWithoutFollowingUsersInput } from './user-create-without-following-users.input';
import { UserScalarWhereInput } from './user-scalar-where.input';
import { UserUpdateManyWithWhereWithoutFollowingUsersInput } from './user-update-many-with-where-without-following-users.input';
import { UserUpdateWithWhereUniqueWithoutFollowingUsersInput } from './user-update-with-where-unique-without-following-users.input';
import { UserUpsertWithWhereUniqueWithoutFollowingUsersInput } from './user-upsert-with-where-unique-without-following-users.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateManyWithoutFollowingUsersInput {
    @Field(() => [UserCreateWithoutFollowingUsersInput], {
        nullable: true,
    })
    create?: UserCreateWithoutFollowingUsersInput | Array<UserCreateWithoutFollowingUsersInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    connect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    set?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    disconnect?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {
        nullable: true,
    })
    delete?: UserWhereUniqueInput | Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutFollowingUsersInput], {
        nullable: true,
    })
    update?:
        | UserUpdateWithWhereUniqueWithoutFollowingUsersInput
        | Array<UserUpdateWithWhereUniqueWithoutFollowingUsersInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutFollowingUsersInput], {
        nullable: true,
    })
    updateMany?:
        | UserUpdateManyWithWhereWithoutFollowingUsersInput
        | Array<UserUpdateManyWithWhereWithoutFollowingUsersInput>;

    @Field(() => [UserScalarWhereInput], {
        nullable: true,
    })
    deleteMany?: UserScalarWhereInput | Array<UserScalarWhereInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutFollowingUsersInput], {
        nullable: true,
    })
    upsert?:
        | UserUpsertWithWhereUniqueWithoutFollowingUsersInput
        | Array<UserUpsertWithWhereUniqueWithoutFollowingUsersInput>;

    @Field(() => [UserCreateOrConnectWithoutfollowingUsersInput], {
        nullable: true,
    })
    connectOrCreate?:
        | UserCreateOrConnectWithoutfollowingUsersInput
        | Array<UserCreateOrConnectWithoutfollowingUsersInput>;
}
