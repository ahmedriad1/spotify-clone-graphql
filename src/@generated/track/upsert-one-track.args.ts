import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackCreateInput } from './track-create.input';
import { TrackUpdateInput } from './track-update.input';

@ArgsType()
export class UpsertOneTrackArgs {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackCreateInput, {nullable:false})
    create!: TrackCreateInput;

    @Field(() => TrackUpdateInput, {nullable:false})
    update!: TrackUpdateInput;
}
