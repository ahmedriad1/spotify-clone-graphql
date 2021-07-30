import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedAlbumsInput } from './user-create-without-liked-albums.input';
import { UserCreateOrConnectWithoutLikedAlbumsInput } from './user-create-or-connect-without-liked-albums.input';
import { UserUpsertWithWhereUniqueWithoutLikedAlbumsInput } from './user-upsert-with-where-unique-without-liked-albums.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutLikedAlbumsInput } from './user-update-with-where-unique-without-liked-albums.input';
import { UserUpdateManyWithWhereWithoutLikedAlbumsInput } from './user-update-many-with-where-without-liked-albums.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutLikedAlbumsInput {
    @Field(() => [UserCreateWithoutLikedAlbumsInput], {nullable:true})
    create?: Array<UserCreateWithoutLikedAlbumsInput>;

    @Field(() => [UserCreateOrConnectWithoutLikedAlbumsInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutLikedAlbumsInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutLikedAlbumsInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutLikedAlbumsInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutLikedAlbumsInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutLikedAlbumsInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutLikedAlbumsInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutLikedAlbumsInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
