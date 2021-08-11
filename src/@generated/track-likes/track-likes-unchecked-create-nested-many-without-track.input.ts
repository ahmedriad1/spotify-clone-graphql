import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesCreateWithoutTrackInput } from './track-likes-create-without-track.input';
import { TrackLikesCreateOrConnectWithoutTrackInput } from './track-likes-create-or-connect-without-track.input';
import { TrackLikesCreateManyTrackInputEnvelope } from './track-likes-create-many-track-input-envelope.input';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';

@InputType()
export class TrackLikesUncheckedCreateNestedManyWithoutTrackInput {
    @Field(() => [TrackLikesCreateWithoutTrackInput], {nullable:true})
    create?: Array<TrackLikesCreateWithoutTrackInput>;

    @Field(() => [TrackLikesCreateOrConnectWithoutTrackInput], {nullable:true})
    connectOrCreate?: Array<TrackLikesCreateOrConnectWithoutTrackInput>;

    @Field(() => TrackLikesCreateManyTrackInputEnvelope, {nullable:true})
    createMany?: TrackLikesCreateManyTrackInputEnvelope;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    connect?: Array<TrackLikesWhereUniqueInput>;
}
