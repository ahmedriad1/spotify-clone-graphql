import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TrackLikesScalarWhereWithAggregatesInput {
    @Field(() => [TrackLikesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TrackLikesScalarWhereWithAggregatesInput>;

    @Field(() => [TrackLikesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TrackLikesScalarWhereWithAggregatesInput>;

    @Field(() => [TrackLikesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TrackLikesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    trackId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    likedAt?: DateTimeWithAggregatesFilter;
}
