import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutLikedTracksInput } from '../user/user-update-one-required-without-liked-tracks.input';

@InputType()
export class TrackLikesUpdateWithoutTrackInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutLikedTracksInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLikedTracksInput;
}
