import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistWhereInput } from './artist-where.input';
import { ArtistOrderByInput } from './artist-order-by.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArtistCountAggregateInput } from './artist-count-aggregate.input';
import { ArtistMinAggregateInput } from './artist-min-aggregate.input';
import { ArtistMaxAggregateInput } from './artist-max-aggregate.input';

@ArgsType()
export class AggregateArtistArgs {
    @Field(() => ArtistWhereInput, {nullable:true})
    where?: ArtistWhereInput;

    @Field(() => [ArtistOrderByInput], {nullable:true})
    orderBy?: Array<ArtistOrderByInput>;

    @Field(() => ArtistWhereUniqueInput, {nullable:true})
    cursor?: ArtistWhereUniqueInput;

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
