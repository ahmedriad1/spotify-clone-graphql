import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@ArgsType()
export class DeleteOneGenreArgs {
    @Field(() => GenreWhereUniqueInput, {nullable:false})
    where!: GenreWhereUniqueInput;
}
