import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackLikesUncheckedUpdateManyWithoutLikedTracksInput {
    @Field(() => String, {nullable:true})
    trackId?: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
