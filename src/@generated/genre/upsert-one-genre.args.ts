import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreCreateInput } from './genre-create.input';
import { GenreUpdateInput } from './genre-update.input';

@ArgsType()
export class UpsertOneGenreArgs {
    @Field(() => GenreWhereUniqueInput, {nullable:false})
    where!: GenreWhereUniqueInput;

    @Field(() => GenreCreateInput, {nullable:false})
    create!: GenreCreateInput;

    @Field(() => GenreUpdateInput, {nullable:false})
    update!: GenreUpdateInput;
}
