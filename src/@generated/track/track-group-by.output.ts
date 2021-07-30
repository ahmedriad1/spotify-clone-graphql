import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrackCountAggregate } from './track-count-aggregate.output';
import { TrackAvgAggregate } from './track-avg-aggregate.output';
import { TrackSumAggregate } from './track-sum-aggregate.output';
import { TrackMinAggregate } from './track-min-aggregate.output';
import { TrackMaxAggregate } from './track-max-aggregate.output';

@ObjectType()
export class TrackGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:false})
    trackId!: string;

    @Field(() => String, {nullable:false})
    genreId!: string;

    @Field(() => String, {nullable:false})
    albumId!: string;

    @Field(() => Int, {nullable:false})
    likesCount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrackCountAggregate, {nullable:true})
    _count?: TrackCountAggregate;

    @Field(() => TrackAvgAggregate, {nullable:true})
    _avg?: TrackAvgAggregate;

    @Field(() => TrackSumAggregate, {nullable:true})
    _sum?: TrackSumAggregate;

    @Field(() => TrackMinAggregate, {nullable:true})
    _min?: TrackMinAggregate;

    @Field(() => TrackMaxAggregate, {nullable:true})
    _max?: TrackMaxAggregate;
}
