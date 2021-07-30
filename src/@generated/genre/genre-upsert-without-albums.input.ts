import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreUpdateWithoutAlbumsInput } from './genre-update-without-albums.input';
import { GenreCreateWithoutAlbumsInput } from './genre-create-without-albums.input';

@InputType()
export class GenreUpsertWithoutAlbumsInput {
    @Field(() => GenreUpdateWithoutAlbumsInput, {nullable:false})
    update!: GenreUpdateWithoutAlbumsInput;

    @Field(() => GenreCreateWithoutAlbumsInput, {nullable:false})
    create!: GenreCreateWithoutAlbumsInput;
}
