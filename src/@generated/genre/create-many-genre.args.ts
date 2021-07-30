import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreCreateManyInput } from './genre-create-many.input';

@ArgsType()
export class CreateManyGenreArgs {
    @Field(() => [GenreCreateManyInput], {nullable:false})
    data!: Array<GenreCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
