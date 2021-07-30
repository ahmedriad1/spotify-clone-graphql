import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';
import { GenreOrderByInput } from './genre-order-by.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenreScalarFieldEnum } from './genre-scalar-field.enum';

@ArgsType()
export class FindFirstGenreArgs {
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

    @Field(() => [GenreScalarFieldEnum], {nullable:true})
    distinct?: Array<GenreScalarFieldEnum>;
}
