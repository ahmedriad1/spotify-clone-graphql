import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutGenreInput } from './track-update-without-genre.input';
import { TrackCreateWithoutGenreInput } from './track-create-without-genre.input';

@InputType()
export class TrackUpsertWithWhereUniqueWithoutGenreInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutGenreInput, {nullable:false})
    update!: TrackUpdateWithoutGenreInput;

    @Field(() => TrackCreateWithoutGenreInput, {nullable:false})
    create!: TrackCreateWithoutGenreInput;
}
