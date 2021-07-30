import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TrackCountAggregate } from './track-count-aggregate.output';
import { TrackAvgAggregate } from './track-avg-aggregate.output';
import { TrackSumAggregate } from './track-sum-aggregate.output';
import { TrackMinAggregate } from './track-min-aggregate.output';
import { TrackMaxAggregate } from './track-max-aggregate.output';

@ObjectType()
export class AggregateTrack {
    @Field(() => TrackCountAggregate, {nullable:true})
    _count?: TrackCountAggregate;

    @Field(() => TrackCountAggregate, {nullable:true})
    count?: TrackCountAggregate;

    @Field(() => TrackAvgAggregate, {nullable:true})
    _avg?: TrackAvgAggregate;

    @Field(() => TrackAvgAggregate, {nullable:true})
    avg?: TrackAvgAggregate;

    @Field(() => TrackSumAggregate, {nullable:true})
    _sum?: TrackSumAggregate;

    @Field(() => TrackSumAggregate, {nullable:true})
    sum?: TrackSumAggregate;

    @Field(() => TrackMinAggregate, {nullable:true})
    _min?: TrackMinAggregate;

    @Field(() => TrackMinAggregate, {nullable:true})
    min?: TrackMinAggregate;

    @Field(() => TrackMaxAggregate, {nullable:true})
    _max?: TrackMaxAggregate;

    @Field(() => TrackMaxAggregate, {nullable:true})
    max?: TrackMaxAggregate;
}
