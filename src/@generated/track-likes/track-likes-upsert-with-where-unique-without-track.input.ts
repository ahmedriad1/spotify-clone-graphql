import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesUpdateWithoutTrackInput } from './track-likes-update-without-track.input';
import { TrackLikesCreateWithoutTrackInput } from './track-likes-create-without-track.input';

@InputType()
export class TrackLikesUpsertWithWhereUniqueWithoutTrackInput {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;

    @Field(() => TrackLikesUpdateWithoutTrackInput, {nullable:false})
    update!: TrackLikesUpdateWithoutTrackInput;

    @Field(() => TrackLikesCreateWithoutTrackInput, {nullable:false})
    create!: TrackLikesCreateWithoutTrackInput;
}
