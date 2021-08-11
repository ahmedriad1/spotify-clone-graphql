import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedTracksInput } from './user-create-without-liked-tracks.input';
import { UserCreateOrConnectWithoutLikedTracksInput } from './user-create-or-connect-without-liked-tracks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLikedTracksInput {
    @Field(() => UserCreateWithoutLikedTracksInput, {nullable:true})
    create?: UserCreateWithoutLikedTracksInput;

    @Field(() => UserCreateOrConnectWithoutLikedTracksInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLikedTracksInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
