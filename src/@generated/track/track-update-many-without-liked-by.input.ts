import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutLikedByInput } from './track-create-without-liked-by.input';
import { TrackCreateOrConnectWithoutLikedByInput } from './track-create-or-connect-without-liked-by.input';
import { TrackUpsertWithWhereUniqueWithoutLikedByInput } from './track-upsert-with-where-unique-without-liked-by.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithWhereUniqueWithoutLikedByInput } from './track-update-with-where-unique-without-liked-by.input';
import { TrackUpdateManyWithWhereWithoutLikedByInput } from './track-update-many-with-where-without-liked-by.input';
import { TrackScalarWhereInput } from './track-scalar-where.input';

@InputType()
export class TrackUpdateManyWithoutLikedByInput {
    @Field(() => [TrackCreateWithoutLikedByInput], {nullable:true})
    create?: Array<TrackCreateWithoutLikedByInput>;

    @Field(() => [TrackCreateOrConnectWithoutLikedByInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutLikedByInput>;

    @Field(() => [TrackUpsertWithWhereUniqueWithoutLikedByInput], {nullable:true})
    upsert?: Array<TrackUpsertWithWhereUniqueWithoutLikedByInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    set?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    delete?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackUpdateWithWhereUniqueWithoutLikedByInput], {nullable:true})
    update?: Array<TrackUpdateWithWhereUniqueWithoutLikedByInput>;

    @Field(() => [TrackUpdateManyWithWhereWithoutLikedByInput], {nullable:true})
    updateMany?: Array<TrackUpdateManyWithWhereWithoutLikedByInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackScalarWhereInput>;
}
