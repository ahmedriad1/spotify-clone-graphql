import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlbumLikesCountAggregate } from './album-likes-count-aggregate.output';
import { AlbumLikesMinAggregate } from './album-likes-min-aggregate.output';
import { AlbumLikesMaxAggregate } from './album-likes-max-aggregate.output';

@ObjectType()
export class AlbumLikesGroupBy {
    @Field(() => String, {nullable:false})
    albumId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    likedAt!: Date | string;

    @Field(() => AlbumLikesCountAggregate, {nullable:true})
    _count?: AlbumLikesCountAggregate;

    @Field(() => AlbumLikesMinAggregate, {nullable:true})
    _min?: AlbumLikesMinAggregate;

    @Field(() => AlbumLikesMaxAggregate, {nullable:true})
    _max?: AlbumLikesMaxAggregate;
}
