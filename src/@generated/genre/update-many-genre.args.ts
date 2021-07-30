import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreUpdateManyMutationInput } from './genre-update-many-mutation.input';
import { GenreWhereInput } from './genre-where.input';

@ArgsType()
export class UpdateManyGenreArgs {
    @Field(() => GenreUpdateManyMutationInput, {nullable:false})
    data!: GenreUpdateManyMutationInput;

    @Field(() => GenreWhereInput, {nullable:true})
    where?: GenreWhereInput;
}
