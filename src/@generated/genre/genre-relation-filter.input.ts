import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';

@InputType()
export class GenreRelationFilter {
    @Field(() => GenreWhereInput, {nullable:true})
    is?: GenreWhereInput;

    @Field(() => GenreWhereInput, {nullable:true})
    isNot?: GenreWhereInput;
}
