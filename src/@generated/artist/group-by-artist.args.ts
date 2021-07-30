import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistWhereInput } from './artist-where.input';
import { ArtistOrderByInput } from './artist-order-by.input';
import { ArtistScalarFieldEnum } from './artist-scalar-field.enum';
import { ArtistScalarWhereWithAggregatesInput } from './artist-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ArtistCountAggregateInput } from './artist-count-aggregate.input';
import { ArtistMinAggregateInput } from './artist-min-aggregate.input';
import { ArtistMaxAggregateInput } from './artist-max-aggregate.input';

@ArgsType()
export class GroupByArtistArgs {
    @Field(() => ArtistWhereInput, {nullable:true})
    where?: ArtistWhereInput;

    @Field(() => [ArtistOrderByInput], {nullable:true})
    orderBy?: Array<ArtistOrderByInput>;

    @Field(() => [ArtistScalarFieldEnum], {nullable:false})
    by!: Array<ArtistScalarFieldEnum>;

    @Field(() => ArtistScalarWhereWithAggregatesInput, {nullable:true})
    having?: ArtistScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ArtistCountAggregateInput, {nullable:true})
    count?: ArtistCountAggregateInput;

    @Field(() => ArtistMinAggregateInput, {nullable:true})
    min?: ArtistMinAggregateInput;

    @Field(() => ArtistMaxAggregateInput, {nullable:true})
    max?: ArtistMaxAggregateInput;
}
