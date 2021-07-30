import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackScalarWhereInput } from './track-scalar-where.input';
import { TrackUpdateManyMutationInput } from './track-update-many-mutation.input';

@InputType()
export class TrackUpdateManyWithWhereWithoutAlbumInput {
    @Field(() => TrackScalarWhereInput, {nullable:false})
    where!: TrackScalarWhereInput;

    @Field(() => TrackUpdateManyMutationInput, {nullable:false})
    data!: TrackUpdateManyMutationInput;
}
