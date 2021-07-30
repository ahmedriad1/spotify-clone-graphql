import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumCreateWithoutGenreInput } from './album-create-without-genre.input';

@InputType()
export class AlbumCreateOrConnectWithoutGenreInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumCreateWithoutGenreInput, {nullable:false})
    create!: AlbumCreateWithoutGenreInput;
}
