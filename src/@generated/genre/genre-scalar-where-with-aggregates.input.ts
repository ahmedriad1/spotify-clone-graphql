import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class GenreScalarWhereWithAggregatesInput {
    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
