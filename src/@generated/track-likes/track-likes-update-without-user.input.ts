import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackUpdateOneRequiredWithoutLikedByInput } from '../track/track-update-one-required-without-liked-by.input';

@InputType()
export class TrackLikesUpdateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => TrackUpdateOneRequiredWithoutLikedByInput, {nullable:true})
    track?: TrackUpdateOneRequiredWithoutLikedByInput;
}
