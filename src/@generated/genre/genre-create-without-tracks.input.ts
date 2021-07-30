import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateNestedManyWithoutGenreInput } from '../album/album-create-nested-many-without-genre.input';

@InputType()
export class GenreCreateWithoutTracksInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AlbumCreateNestedManyWithoutGenreInput, {nullable:true})
    albums?: AlbumCreateNestedManyWithoutGenreInput;
}
