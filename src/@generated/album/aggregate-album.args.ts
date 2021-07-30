import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumWhereInput } from './album-where.input';
import { AlbumOrderByInput } from './album-order-by.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlbumCountAggregateInput } from './album-count-aggregate.input';
import { AlbumAvgAggregateInput } from './album-avg-aggregate.input';
import { AlbumSumAggregateInput } from './album-sum-aggregate.input';
import { AlbumMinAggregateInput } from './album-min-aggregate.input';
import { AlbumMaxAggregateInput } from './album-max-aggregate.input';

@ArgsType()
export class AggregateAlbumArgs {
    @Field(() => AlbumWhereInput, {nullable:true})
    where?: AlbumWhereInput;

    @Field(() => [AlbumOrderByInput], {nullable:true})
    orderBy?: Array<AlbumOrderByInput>;

    @Field(() => AlbumWhereUniqueInput, {nullable:true})
    cursor?: AlbumWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AlbumCountAggregateInput, {nullable:true})
    count?: AlbumCountAggregateInput;

    @Field(() => AlbumAvgAggregateInput, {nullable:true})
    avg?: AlbumAvgAggregateInput;

    @Field(() => AlbumSumAggregateInput, {nullable:true})
    sum?: AlbumSumAggregateInput;

    @Field(() => AlbumMinAggregateInput, {nullable:true})
    min?: AlbumMinAggregateInput;

    @Field(() => AlbumMaxAggregateInput, {nullable:true})
    max?: AlbumMaxAggregateInput;
}
