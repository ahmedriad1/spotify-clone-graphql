import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesWhereInput } from './track-likes-where.input';
import { TrackLikesOrderByInput } from './track-likes-order-by.input';
import { TrackLikesScalarFieldEnum } from './track-likes-scalar-field.enum';
import { TrackLikesScalarWhereWithAggregatesInput } from './track-likes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TrackLikesCountAggregateInput } from './track-likes-count-aggregate.input';
import { TrackLikesMinAggregateInput } from './track-likes-min-aggregate.input';
import { TrackLikesMaxAggregateInput } from './track-likes-max-aggregate.input';

@ArgsType()
export class GroupByTrackLikesArgs {
    @Field(() => TrackLikesWhereInput, {nullable:true})
    where?: TrackLikesWhereInput;

    @Field(() => [TrackLikesOrderByInput], {nullable:true})
    orderBy?: Array<TrackLikesOrderByInput>;

    @Field(() => [TrackLikesScalarFieldEnum], {nullable:false})
    by!: Array<TrackLikesScalarFieldEnum>;

    @Field(() => TrackLikesScalarWhereWithAggregatesInput, {nullable:true})
    having?: TrackLikesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TrackLikesCountAggregateInput, {nullable:true})
    count?: TrackLikesCountAggregateInput;

    @Field(() => TrackLikesMinAggregateInput, {nullable:true})
    min?: TrackLikesMinAggregateInput;

    @Field(() => TrackLikesMaxAggregateInput, {nullable:true})
    max?: TrackLikesMaxAggregateInput;
}
