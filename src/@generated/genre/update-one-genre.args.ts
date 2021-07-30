import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreUpdateInput } from './genre-update.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';

@ArgsType()
export class UpdateOneGenreArgs {
    @Field(() => GenreUpdateInput, {nullable:false})
    data!: GenreUpdateInput;

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    where!: GenreWhereUniqueInput;
}
