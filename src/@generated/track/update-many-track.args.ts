import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackUpdateManyMutationInput } from './track-update-many-mutation.input';
import { TrackWhereInput } from './track-where.input';

@ArgsType()
export class UpdateManyTrackArgs {
    @Field(() => TrackUpdateManyMutationInput, {nullable:false})
    data!: TrackUpdateManyMutationInput;

    @Field(() => TrackWhereInput, {nullable:true})
    where?: TrackWhereInput;
}
