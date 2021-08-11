import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesScalarWhereInput } from './track-likes-scalar-where.input';
import { TrackLikesUpdateManyMutationInput } from './track-likes-update-many-mutation.input';

@InputType()
export class TrackLikesUpdateManyWithWhereWithoutUserInput {
    @Field(() => TrackLikesScalarWhereInput, {nullable:false})
    where!: TrackLikesScalarWhereInput;

    @Field(() => TrackLikesUpdateManyMutationInput, {nullable:false})
    data!: TrackLikesUpdateManyMutationInput;
}
