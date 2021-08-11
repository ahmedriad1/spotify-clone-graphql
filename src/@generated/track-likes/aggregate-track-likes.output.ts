import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TrackLikesCountAggregate } from './track-likes-count-aggregate.output';
import { TrackLikesMinAggregate } from './track-likes-min-aggregate.output';
import { TrackLikesMaxAggregate } from './track-likes-max-aggregate.output';

@ObjectType()
export class AggregateTrackLikes {
    @Field(() => TrackLikesCountAggregate, {nullable:true})
    _count?: TrackLikesCountAggregate;

    @Field(() => TrackLikesCountAggregate, {nullable:true})
    count?: TrackLikesCountAggregate;

    @Field(() => TrackLikesMinAggregate, {nullable:true})
    _min?: TrackLikesMinAggregate;

    @Field(() => TrackLikesMinAggregate, {nullable:true})
    min?: TrackLikesMinAggregate;

    @Field(() => TrackLikesMaxAggregate, {nullable:true})
    _max?: TrackLikesMaxAggregate;

    @Field(() => TrackLikesMaxAggregate, {nullable:true})
    max?: TrackLikesMaxAggregate;
}
