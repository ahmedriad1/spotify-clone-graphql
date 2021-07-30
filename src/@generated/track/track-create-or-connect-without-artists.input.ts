import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackCreateWithoutArtistsInput } from './track-create-without-artists.input';

@InputType()
export class TrackCreateOrConnectWithoutArtistsInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackCreateWithoutArtistsInput, {nullable:false})
    create!: TrackCreateWithoutArtistsInput;
}
