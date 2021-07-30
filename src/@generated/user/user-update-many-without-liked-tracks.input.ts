import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedTracksInput } from './user-create-without-liked-tracks.input';
import { UserCreateOrConnectWithoutLikedTracksInput } from './user-create-or-connect-without-liked-tracks.input';
import { UserUpsertWithWhereUniqueWithoutLikedTracksInput } from './user-upsert-with-where-unique-without-liked-tracks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithWhereUniqueWithoutLikedTracksInput } from './user-update-with-where-unique-without-liked-tracks.input';
import { UserUpdateManyWithWhereWithoutLikedTracksInput } from './user-update-many-with-where-without-liked-tracks.input';
import { UserScalarWhereInput } from './user-scalar-where.input';

@InputType()
export class UserUpdateManyWithoutLikedTracksInput {
    @Field(() => [UserCreateWithoutLikedTracksInput], {nullable:true})
    create?: Array<UserCreateWithoutLikedTracksInput>;

    @Field(() => [UserCreateOrConnectWithoutLikedTracksInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutLikedTracksInput>;

    @Field(() => [UserUpsertWithWhereUniqueWithoutLikedTracksInput], {nullable:true})
    upsert?: Array<UserUpsertWithWhereUniqueWithoutLikedTracksInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    set?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    disconnect?: Array<UserWhereUniqueInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    delete?: Array<UserWhereUniqueInput>;

    @Field(() => [UserUpdateWithWhereUniqueWithoutLikedTracksInput], {nullable:true})
    update?: Array<UserUpdateWithWhereUniqueWithoutLikedTracksInput>;

    @Field(() => [UserUpdateManyWithWhereWithoutLikedTracksInput], {nullable:true})
    updateMany?: Array<UserUpdateManyWithWhereWithoutLikedTracksInput>;

    @Field(() => [UserScalarWhereInput], {nullable:true})
    deleteMany?: Array<UserScalarWhereInput>;
}
