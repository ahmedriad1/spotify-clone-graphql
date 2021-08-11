import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlbumLikesCountAggregate } from './album-likes-count-aggregate.output';
import { AlbumLikesMinAggregate } from './album-likes-min-aggregate.output';
import { AlbumLikesMaxAggregate } from './album-likes-max-aggregate.output';

@ObjectType()
export class AggregateAlbumLikes {
    @Field(() => AlbumLikesCountAggregate, {nullable:true})
    _count?: AlbumLikesCountAggregate;

    @Field(() => AlbumLikesCountAggregate, {nullable:true})
    count?: AlbumLikesCountAggregate;

    @Field(() => AlbumLikesMinAggregate, {nullable:true})
    _min?: AlbumLikesMinAggregate;

    @Field(() => AlbumLikesMinAggregate, {nullable:true})
    min?: AlbumLikesMinAggregate;

    @Field(() => AlbumLikesMaxAggregate, {nullable:true})
    _max?: AlbumLikesMaxAggregate;

    @Field(() => AlbumLikesMaxAggregate, {nullable:true})
    max?: AlbumLikesMaxAggregate;
}
