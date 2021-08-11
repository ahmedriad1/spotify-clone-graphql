import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AlbumLikesCountAggregate {
    @Field(() => Int, {nullable:false})
    albumId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    likedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
