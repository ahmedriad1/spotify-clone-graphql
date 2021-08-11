import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AlbumLikesScalarWhereWithAggregatesInput {
    @Field(() => [AlbumLikesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AlbumLikesScalarWhereWithAggregatesInput>;

    @Field(() => [AlbumLikesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AlbumLikesScalarWhereWithAggregatesInput>;

    @Field(() => [AlbumLikesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AlbumLikesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    albumId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    likedAt?: DateTimeWithAggregatesFilter;
}
