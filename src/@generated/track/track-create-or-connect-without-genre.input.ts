import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackCreateWithoutGenreInput } from './track-create-without-genre.input';

@InputType()
export class TrackCreateOrConnectWithoutGenreInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackCreateWithoutGenreInput, {nullable:false})
    create!: TrackCreateWithoutGenreInput;
}
