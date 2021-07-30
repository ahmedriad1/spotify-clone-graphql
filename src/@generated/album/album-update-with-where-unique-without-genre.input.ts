import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithoutGenreInput } from './album-update-without-genre.input';

@InputType()
export class AlbumUpdateWithWhereUniqueWithoutGenreInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumUpdateWithoutGenreInput, {nullable:false})
    data!: AlbumUpdateWithoutGenreInput;
}
