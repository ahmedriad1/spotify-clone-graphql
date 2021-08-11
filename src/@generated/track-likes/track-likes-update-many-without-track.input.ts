import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesCreateWithoutTrackInput } from './track-likes-create-without-track.input';
import { TrackLikesCreateOrConnectWithoutTrackInput } from './track-likes-create-or-connect-without-track.input';
import { TrackLikesUpsertWithWhereUniqueWithoutTrackInput } from './track-likes-upsert-with-where-unique-without-track.input';
import { TrackLikesCreateManyTrackInputEnvelope } from './track-likes-create-many-track-input-envelope.input';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesUpdateWithWhereUniqueWithoutTrackInput } from './track-likes-update-with-where-unique-without-track.input';
import { TrackLikesUpdateManyWithWhereWithoutTrackInput } from './track-likes-update-many-with-where-without-track.input';
import { TrackLikesScalarWhereInput } from './track-likes-scalar-where.input';

@InputType()
export class TrackLikesUpdateManyWithoutTrackInput {
    @Field(() => [TrackLikesCreateWithoutTrackInput], {nullable:true})
    create?: Array<TrackLikesCreateWithoutTrackInput>;

    @Field(() => [TrackLikesCreateOrConnectWithoutTrackInput], {nullable:true})
    connectOrCreate?: Array<TrackLikesCreateOrConnectWithoutTrackInput>;

    @Field(() => [TrackLikesUpsertWithWhereUniqueWithoutTrackInput], {nullable:true})
    upsert?: Array<TrackLikesUpsertWithWhereUniqueWithoutTrackInput>;

    @Field(() => TrackLikesCreateManyTrackInputEnvelope, {nullable:true})
    createMany?: TrackLikesCreateManyTrackInputEnvelope;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    connect?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    set?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    delete?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesUpdateWithWhereUniqueWithoutTrackInput], {nullable:true})
    update?: Array<TrackLikesUpdateWithWhereUniqueWithoutTrackInput>;

    @Field(() => [TrackLikesUpdateManyWithWhereWithoutTrackInput], {nullable:true})
    updateMany?: Array<TrackLikesUpdateManyWithWhereWithoutTrackInput>;

    @Field(() => [TrackLikesScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackLikesScalarWhereInput>;
}
