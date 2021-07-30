import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutGenreInput } from './track-update-without-genre.input';

@InputType()
export class TrackUpdateWithWhereUniqueWithoutGenreInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutGenreInput, {nullable:false})
    data!: TrackUpdateWithoutGenreInput;
}
