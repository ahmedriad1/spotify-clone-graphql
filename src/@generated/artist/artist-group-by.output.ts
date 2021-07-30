import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArtistCountAggregate } from './artist-count-aggregate.output';
import { ArtistMinAggregate } from './artist-min-aggregate.output';
import { ArtistMaxAggregate } from './artist-max-aggregate.output';

@ObjectType()
export class ArtistGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageId?: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => ArtistCountAggregate, {nullable:true})
    _count?: ArtistCountAggregate;

    @Field(() => ArtistMinAggregate, {nullable:true})
    _min?: ArtistMinAggregate;

    @Field(() => ArtistMaxAggregate, {nullable:true})
    _max?: ArtistMaxAggregate;
}
