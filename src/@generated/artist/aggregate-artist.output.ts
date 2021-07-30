import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArtistCountAggregate } from './artist-count-aggregate.output';
import { ArtistMinAggregate } from './artist-min-aggregate.output';
import { ArtistMaxAggregate } from './artist-max-aggregate.output';

@ObjectType()
export class AggregateArtist {
    @Field(() => ArtistCountAggregate, {nullable:true})
    _count?: ArtistCountAggregate;

    @Field(() => ArtistCountAggregate, {nullable:true})
    count?: ArtistCountAggregate;

    @Field(() => ArtistMinAggregate, {nullable:true})
    _min?: ArtistMinAggregate;

    @Field(() => ArtistMinAggregate, {nullable:true})
    min?: ArtistMinAggregate;

    @Field(() => ArtistMaxAggregate, {nullable:true})
    _max?: ArtistMaxAggregate;

    @Field(() => ArtistMaxAggregate, {nullable:true})
    max?: ArtistMaxAggregate;
}
