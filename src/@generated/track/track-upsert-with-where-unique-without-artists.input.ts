import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutArtistsInput } from './track-update-without-artists.input';
import { TrackCreateWithoutArtistsInput } from './track-create-without-artists.input';

@InputType()
export class TrackUpsertWithWhereUniqueWithoutArtistsInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutArtistsInput, {nullable:false})
    update!: TrackUpdateWithoutArtistsInput;

    @Field(() => TrackCreateWithoutArtistsInput, {nullable:false})
    create!: TrackCreateWithoutArtistsInput;
}
