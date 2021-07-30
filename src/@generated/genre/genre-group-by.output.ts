import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenreCountAggregate } from './genre-count-aggregate.output';
import { GenreMinAggregate } from './genre-min-aggregate.output';
import { GenreMaxAggregate } from './genre-max-aggregate.output';

@ObjectType()
export class GenreGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GenreCountAggregate, {nullable:true})
    _count?: GenreCountAggregate;

    @Field(() => GenreMinAggregate, {nullable:true})
    _min?: GenreMinAggregate;

    @Field(() => GenreMaxAggregate, {nullable:true})
    _max?: GenreMaxAggregate;
}
