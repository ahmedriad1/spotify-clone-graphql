import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlbumCountAggregate } from './album-count-aggregate.output';
import { AlbumAvgAggregate } from './album-avg-aggregate.output';
import { AlbumSumAggregate } from './album-sum-aggregate.output';
import { AlbumMinAggregate } from './album-min-aggregate.output';
import { AlbumMaxAggregate } from './album-max-aggregate.output';

@ObjectType()
export class AggregateAlbum {
    @Field(() => AlbumCountAggregate, {nullable:true})
    _count?: AlbumCountAggregate;

    @Field(() => AlbumCountAggregate, {nullable:true})
    count?: AlbumCountAggregate;

    @Field(() => AlbumAvgAggregate, {nullable:true})
    _avg?: AlbumAvgAggregate;

    @Field(() => AlbumAvgAggregate, {nullable:true})
    avg?: AlbumAvgAggregate;

    @Field(() => AlbumSumAggregate, {nullable:true})
    _sum?: AlbumSumAggregate;

    @Field(() => AlbumSumAggregate, {nullable:true})
    sum?: AlbumSumAggregate;

    @Field(() => AlbumMinAggregate, {nullable:true})
    _min?: AlbumMinAggregate;

    @Field(() => AlbumMinAggregate, {nullable:true})
    min?: AlbumMinAggregate;

    @Field(() => AlbumMaxAggregate, {nullable:true})
    _max?: AlbumMaxAggregate;

    @Field(() => AlbumMaxAggregate, {nullable:true})
    max?: AlbumMaxAggregate;
}
