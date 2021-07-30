import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackUpdateInput } from './track-update.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@ArgsType()
export class UpdateOneTrackArgs {
    @Field(() => TrackUpdateInput, {nullable:false})
    data!: TrackUpdateInput;

    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;
}
