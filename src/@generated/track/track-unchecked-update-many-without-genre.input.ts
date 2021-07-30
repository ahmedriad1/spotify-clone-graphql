import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutGenreInput } from './track-create-without-genre.input';
import { TrackCreateOrConnectWithoutGenreInput } from './track-create-or-connect-without-genre.input';
import { TrackUpsertWithWhereUniqueWithoutGenreInput } from './track-upsert-with-where-unique-without-genre.input';
import { TrackCreateManyGenreInputEnvelope } from './track-create-many-genre-input-envelope.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithWhereUniqueWithoutGenreInput } from './track-update-with-where-unique-without-genre.input';
import { TrackUpdateManyWithWhereWithoutGenreInput } from './track-update-many-with-where-without-genre.input';
import { TrackScalarWhereInput } from './track-scalar-where.input';

@InputType()
export class TrackUncheckedUpdateManyWithoutGenreInput {
    @Field(() => [TrackCreateWithoutGenreInput], {nullable:true})
    create?: Array<TrackCreateWithoutGenreInput>;

    @Field(() => [TrackCreateOrConnectWithoutGenreInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutGenreInput>;

    @Field(() => [TrackUpsertWithWhereUniqueWithoutGenreInput], {nullable:true})
    upsert?: Array<TrackUpsertWithWhereUniqueWithoutGenreInput>;

    @Field(() => TrackCreateManyGenreInputEnvelope, {nullable:true})
    createMany?: TrackCreateManyGenreInputEnvelope;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    set?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    delete?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackUpdateWithWhereUniqueWithoutGenreInput], {nullable:true})
    update?: Array<TrackUpdateWithWhereUniqueWithoutGenreInput>;

    @Field(() => [TrackUpdateManyWithWhereWithoutGenreInput], {nullable:true})
    updateMany?: Array<TrackUpdateManyWithWhereWithoutGenreInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackScalarWhereInput>;
}
