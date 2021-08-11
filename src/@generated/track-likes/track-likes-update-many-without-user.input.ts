import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesCreateWithoutUserInput } from './track-likes-create-without-user.input';
import { TrackLikesCreateOrConnectWithoutUserInput } from './track-likes-create-or-connect-without-user.input';
import { TrackLikesUpsertWithWhereUniqueWithoutUserInput } from './track-likes-upsert-with-where-unique-without-user.input';
import { TrackLikesCreateManyUserInputEnvelope } from './track-likes-create-many-user-input-envelope.input';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesUpdateWithWhereUniqueWithoutUserInput } from './track-likes-update-with-where-unique-without-user.input';
import { TrackLikesUpdateManyWithWhereWithoutUserInput } from './track-likes-update-many-with-where-without-user.input';
import { TrackLikesScalarWhereInput } from './track-likes-scalar-where.input';

@InputType()
export class TrackLikesUpdateManyWithoutUserInput {
    @Field(() => [TrackLikesCreateWithoutUserInput], {nullable:true})
    create?: Array<TrackLikesCreateWithoutUserInput>;

    @Field(() => [TrackLikesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<TrackLikesCreateOrConnectWithoutUserInput>;

    @Field(() => [TrackLikesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<TrackLikesUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TrackLikesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: TrackLikesCreateManyUserInputEnvelope;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    connect?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    set?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    delete?: Array<TrackLikesWhereUniqueInput>;

    @Field(() => [TrackLikesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<TrackLikesUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TrackLikesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<TrackLikesUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TrackLikesScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackLikesScalarWhereInput>;
}
