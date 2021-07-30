import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutGenreInput } from './track-create-without-genre.input';
import { TrackCreateOrConnectWithoutGenreInput } from './track-create-or-connect-without-genre.input';
import { TrackCreateManyGenreInputEnvelope } from './track-create-many-genre-input-envelope.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@InputType()
export class TrackUncheckedCreateNestedManyWithoutGenreInput {
    @Field(() => [TrackCreateWithoutGenreInput], {nullable:true})
    create?: Array<TrackCreateWithoutGenreInput>;

    @Field(() => [TrackCreateOrConnectWithoutGenreInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutGenreInput>;

    @Field(() => TrackCreateManyGenreInputEnvelope, {nullable:true})
    createMany?: TrackCreateManyGenreInputEnvelope;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;
}
