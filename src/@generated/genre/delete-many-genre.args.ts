import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';

@ArgsType()
export class DeleteManyGenreArgs {
    @Field(() => GenreWhereInput, {nullable:true})
    where?: GenreWhereInput;
}
