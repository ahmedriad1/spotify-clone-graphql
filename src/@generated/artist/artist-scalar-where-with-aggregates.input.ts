import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ArtistScalarWhereWithAggregatesInput {
    @Field(() => [ArtistScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ArtistScalarWhereWithAggregatesInput>;

    @Field(() => [ArtistScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ArtistScalarWhereWithAggregatesInput>;

    @Field(() => [ArtistScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ArtistScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;
}
