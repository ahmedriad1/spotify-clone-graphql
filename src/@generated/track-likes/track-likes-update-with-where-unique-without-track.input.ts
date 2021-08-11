import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesUpdateWithoutTrackInput } from './track-likes-update-without-track.input';

@InputType()
export class TrackLikesUpdateWithWhereUniqueWithoutTrackInput {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;

    @Field(() => TrackLikesUpdateWithoutTrackInput, {nullable:false})
    data!: TrackLikesUpdateWithoutTrackInput;
}
