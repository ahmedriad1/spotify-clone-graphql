import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedTracksInput } from './user-create-without-liked-tracks.input';
import { UserCreateOrConnectWithoutLikedTracksInput } from './user-create-or-connect-without-liked-tracks.input';
import { UserUpsertWithoutLikedTracksInput } from './user-upsert-without-liked-tracks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLikedTracksInput } from './user-update-without-liked-tracks.input';

@InputType()
export class UserUpdateOneRequiredWithoutLikedTracksInput {
    @Field(() => UserCreateWithoutLikedTracksInput, {nullable:true})
    create?: UserCreateWithoutLikedTracksInput;

    @Field(() => UserCreateOrConnectWithoutLikedTracksInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLikedTracksInput;

    @Field(() => UserUpsertWithoutLikedTracksInput, {nullable:true})
    upsert?: UserUpsertWithoutLikedTracksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLikedTracksInput, {nullable:true})
    update?: UserUpdateWithoutLikedTracksInput;
}
