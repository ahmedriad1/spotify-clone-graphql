import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLikedTracksInput } from '../user/user-create-nested-one-without-liked-tracks.input';

@InputType()
export class TrackLikesCreateWithoutTrackInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLikedTracksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikedTracksInput;
}
