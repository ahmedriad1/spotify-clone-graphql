import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedTracksInput } from './user-create-without-liked-tracks.input';
import { UserCreateOrConnectWithoutLikedTracksInput } from './user-create-or-connect-without-liked-tracks.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedManyWithoutLikedTracksInput {
    @Field(() => [UserCreateWithoutLikedTracksInput], {nullable:true})
    create?: Array<UserCreateWithoutLikedTracksInput>;

    @Field(() => [UserCreateOrConnectWithoutLikedTracksInput], {nullable:true})
    connectOrCreate?: Array<UserCreateOrConnectWithoutLikedTracksInput>;

    @Field(() => [UserWhereUniqueInput], {nullable:true})
    connect?: Array<UserWhereUniqueInput>;
}
