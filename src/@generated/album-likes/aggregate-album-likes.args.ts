import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesWhereInput } from './album-likes-where.input';
import { AlbumLikesOrderByInput } from './album-likes-order-by.input';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlbumLikesCountAggregateInput } from './album-likes-count-aggregate.input';
import { AlbumLikesMinAggregateInput } from './album-likes-min-aggregate.input';
import { AlbumLikesMaxAggregateInput } from './album-likes-max-aggregate.input';

@ArgsType()
export class AggregateAlbumLikesArgs {
    @Field(() => AlbumLikesWhereInput, {nullable:true})
    where?: AlbumLikesWhereInput;

    @Field(() => [AlbumLikesOrderByInput], {nullable:true})
    orderBy?: Array<AlbumLikesOrderByInput>;

    @Field(() => AlbumLikesWhereUniqueInput, {nullable:true})
    cursor?: AlbumLikesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AlbumLikesCountAggregateInput, {nullable:true})
    count?: AlbumLikesCountAggregateInput;

    @Field(() => AlbumLikesMinAggregateInput, {nullable:true})
    min?: AlbumLikesMinAggregateInput;

    @Field(() => AlbumLikesMaxAggregateInput, {nullable:true})
    max?: AlbumLikesMaxAggregateInput;
}
