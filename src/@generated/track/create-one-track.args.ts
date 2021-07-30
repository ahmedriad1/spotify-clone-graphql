import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackCreateInput } from './track-create.input';

@ArgsType()
export class CreateOneTrackArgs {
    @Field(() => TrackCreateInput, {nullable:false})
    data!: TrackCreateInput;
}
