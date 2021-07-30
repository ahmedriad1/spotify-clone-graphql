import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutArtistsInput } from './track-create-without-artists.input';
import { TrackCreateOrConnectWithoutArtistsInput } from './track-create-or-connect-without-artists.input';
import { TrackUpsertWithWhereUniqueWithoutArtistsInput } from './track-upsert-with-where-unique-without-artists.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithWhereUniqueWithoutArtistsInput } from './track-update-with-where-unique-without-artists.input';
import { TrackUpdateManyWithWhereWithoutArtistsInput } from './track-update-many-with-where-without-artists.input';
import { TrackScalarWhereInput } from './track-scalar-where.input';

@InputType()
export class TrackUpdateManyWithoutArtistsInput {
    @Field(() => [TrackCreateWithoutArtistsInput], {nullable:true})
    create?: Array<TrackCreateWithoutArtistsInput>;

    @Field(() => [TrackCreateOrConnectWithoutArtistsInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutArtistsInput>;

    @Field(() => [TrackUpsertWithWhereUniqueWithoutArtistsInput], {nullable:true})
    upsert?: Array<TrackUpsertWithWhereUniqueWithoutArtistsInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    set?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    delete?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackUpdateWithWhereUniqueWithoutArtistsInput], {nullable:true})
    update?: Array<TrackUpdateWithWhereUniqueWithoutArtistsInput>;

    @Field(() => [TrackUpdateManyWithWhereWithoutArtistsInput], {nullable:true})
    updateMany?: Array<TrackUpdateManyWithWhereWithoutArtistsInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackScalarWhereInput>;
}
