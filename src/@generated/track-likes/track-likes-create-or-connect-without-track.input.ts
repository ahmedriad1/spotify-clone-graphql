import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesCreateWithoutTrackInput } from './track-likes-create-without-track.input';

@InputType()
export class TrackLikesCreateOrConnectWithoutTrackInput {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;

    @Field(() => TrackLikesCreateWithoutTrackInput, {nullable:false})
    create!: TrackLikesCreateWithoutTrackInput;
}
