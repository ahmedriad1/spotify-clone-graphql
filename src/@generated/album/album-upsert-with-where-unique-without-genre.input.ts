import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithoutGenreInput } from './album-update-without-genre.input';
import { AlbumCreateWithoutGenreInput } from './album-create-without-genre.input';

@InputType()
export class AlbumUpsertWithWhereUniqueWithoutGenreInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumUpdateWithoutGenreInput, {nullable:false})
    update!: AlbumUpdateWithoutGenreInput;

    @Field(() => AlbumCreateWithoutGenreInput, {nullable:false})
    create!: AlbumCreateWithoutGenreInput;
}
