import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenreCountAggregate } from './genre-count-aggregate.output';
import { GenreMinAggregate } from './genre-min-aggregate.output';
import { GenreMaxAggregate } from './genre-max-aggregate.output';

@ObjectType()
export class AggregateGenre {
    @Field(() => GenreCountAggregate, {nullable:true})
    _count?: GenreCountAggregate;

    @Field(() => GenreCountAggregate, {nullable:true})
    count?: GenreCountAggregate;

    @Field(() => GenreMinAggregate, {nullable:true})
    _min?: GenreMinAggregate;

    @Field(() => GenreMinAggregate, {nullable:true})
    min?: GenreMinAggregate;

    @Field(() => GenreMaxAggregate, {nullable:true})
    _max?: GenreMaxAggregate;

    @Field(() => GenreMaxAggregate, {nullable:true})
    max?: GenreMaxAggregate;
}
