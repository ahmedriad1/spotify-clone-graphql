import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';
import { GenreOrderByInput } from './genre-order-by.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenreCountAggregateInput } from './genre-count-aggregate.input';
import { GenreMinAggregateInput } from './genre-min-aggregate.input';
import { GenreMaxAggregateInput } from './genre-max-aggregate.input';

@ArgsType()
export class AggregateGenreArgs {
    @Field(() => GenreWhereInput, {nullable:true})
    where?: GenreWhereInput;

    @Field(() => [GenreOrderByInput], {nullable:true})
    orderBy?: Array<GenreOrderByInput>;

    @Field(() => GenreWhereUniqueInput, {nullable:true})
    cursor?: GenreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GenreCountAggregateInput, {nullable:true})
    count?: GenreCountAggregateInput;

    @Field(() => GenreMinAggregateInput, {nullable:true})
    min?: GenreMinAggregateInput;

    @Field(() => GenreMaxAggregateInput, {nullable:true})
    max?: GenreMaxAggregateInput;
}
