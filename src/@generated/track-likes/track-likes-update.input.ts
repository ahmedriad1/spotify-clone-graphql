import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackUpdateOneRequiredWithoutLikedByInput } from '../track/track-update-one-required-without-liked-by.input';
import { UserUpdateOneRequiredWithoutLikedTracksInput } from '../user/user-update-one-required-without-liked-tracks.input';

@InputType()
export class TrackLikesUpdateInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => TrackUpdateOneRequiredWithoutLikedByInput, {nullable:true})
    track?: TrackUpdateOneRequiredWithoutLikedByInput;

    @Field(() => UserUpdateOneRequiredWithoutLikedTracksInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLikedTracksInput;
}
