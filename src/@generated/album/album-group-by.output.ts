import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { AlbumCountAggregate } from './album-count-aggregate.output';
import { AlbumAvgAggregate } from './album-avg-aggregate.output';
import { AlbumSumAggregate } from './album-sum-aggregate.output';
import { AlbumMinAggregate } from './album-min-aggregate.output';
import { AlbumMaxAggregate } from './album-max-aggregate.output';

@ObjectType()
export class AlbumGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => AlbumType, {nullable:false})
    type!: AlbumType;

    @Field(() => String, {nullable:true})
    imageId?: string;

    @Field(() => String, {nullable:false})
    genreId!: string;

    @Field(() => Int, {nullable:false})
    likesCount!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AlbumCountAggregate, {nullable:true})
    _count?: AlbumCountAggregate;

    @Field(() => AlbumAvgAggregate, {nullable:true})
    _avg?: AlbumAvgAggregate;

    @Field(() => AlbumSumAggregate, {nullable:true})
    _sum?: AlbumSumAggregate;

    @Field(() => AlbumMinAggregate, {nullable:true})
    _min?: AlbumMinAggregate;

    @Field(() => AlbumMaxAggregate, {nullable:true})
    _max?: AlbumMaxAggregate;
}
