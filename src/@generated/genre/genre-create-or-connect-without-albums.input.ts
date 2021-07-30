import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { GenreCreateWithoutAlbumsInput } from './genre-create-without-albums.input';

@InputType()
export class GenreCreateOrConnectWithoutAlbumsInput {
    @Field(() => GenreWhereUniqueInput, {nullable:false})
    where!: GenreWhereUniqueInput;

    @Field(() => GenreCreateWithoutAlbumsInput, {nullable:false})
    create!: GenreCreateWithoutAlbumsInput;
}
