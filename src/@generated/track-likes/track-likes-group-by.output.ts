import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TrackLikesCountAggregate } from './track-likes-count-aggregate.output';
import { TrackLikesMinAggregate } from './track-likes-min-aggregate.output';
import { TrackLikesMaxAggregate } from './track-likes-max-aggregate.output';

@ObjectType()
export class TrackLikesGroupBy {
    @Field(() => String, {nullable:false})
    trackId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    likedAt!: Date | string;

    @Field(() => TrackLikesCountAggregate, {nullable:true})
    _count?: TrackLikesCountAggregate;

    @Field(() => TrackLikesMinAggregate, {nullable:true})
    _min?: TrackLikesMinAggregate;

    @Field(() => TrackLikesMaxAggregate, {nullable:true})
    _max?: TrackLikesMaxAggregate;
}
