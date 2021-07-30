import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';
import { TrackOrderByInput } from './track-order-by.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrackCountAggregateInput } from './track-count-aggregate.input';
import { TrackAvgAggregateInput } from './track-avg-aggregate.input';
import { TrackSumAggregateInput } from './track-sum-aggregate.input';
import { TrackMinAggregateInput } from './track-min-aggregate.input';
import { TrackMaxAggregateInput } from './track-max-aggregate.input';

@ArgsType()
export class AggregateTrackArgs {
    @Field(() => TrackWhereInput, {nullable:true})
    where?: TrackWhereInput;

    @Field(() => [TrackOrderByInput], {nullable:true})
    orderBy?: Array<TrackOrderByInput>;

    @Field(() => TrackWhereUniqueInput, {nullable:true})
    cursor?: TrackWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TrackCountAggregateInput, {nullable:true})
    count?: TrackCountAggregateInput;

    @Field(() => TrackAvgAggregateInput, {nullable:true})
    avg?: TrackAvgAggregateInput;

    @Field(() => TrackSumAggregateInput, {nullable:true})
    sum?: TrackSumAggregateInput;

    @Field(() => TrackMinAggregateInput, {nullable:true})
    min?: TrackMinAggregateInput;

    @Field(() => TrackMaxAggregateInput, {nullable:true})
    max?: TrackMaxAggregateInput;
}
