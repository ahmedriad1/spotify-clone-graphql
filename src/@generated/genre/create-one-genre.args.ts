import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreCreateInput } from './genre-create.input';

@ArgsType()
export class CreateOneGenreArgs {
    @Field(() => GenreCreateInput, {nullable:false})
    data!: GenreCreateInput;
}
