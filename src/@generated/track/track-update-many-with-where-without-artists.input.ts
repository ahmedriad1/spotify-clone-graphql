import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackScalarWhereInput } from './track-scalar-where.input';
import { TrackUpdateManyMutationInput } from './track-update-many-mutation.input';

@InputType()
export class TrackUpdateManyWithWhereWithoutArtistsInput {
    @Field(() => TrackScalarWhereInput, {nullable:false})
    where!: TrackScalarWhereInput;

    @Field(() => TrackUpdateManyMutationInput, {nullable:false})
    data!: TrackUpdateManyMutationInput;
}
