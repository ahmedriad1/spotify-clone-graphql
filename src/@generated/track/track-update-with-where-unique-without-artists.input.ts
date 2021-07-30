import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutArtistsInput } from './track-update-without-artists.input';

@InputType()
export class TrackUpdateWithWhereUniqueWithoutArtistsInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutArtistsInput, {nullable:false})
    data!: TrackUpdateWithoutArtistsInput;
}
