import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumUncheckedUpdateManyWithoutGenreInput } from '../album/album-unchecked-update-many-without-genre.input';

@InputType()
export class GenreUncheckedUpdateWithoutTracksInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AlbumUncheckedUpdateManyWithoutGenreInput, {nullable:true})
    albums?: AlbumUncheckedUpdateManyWithoutGenreInput;
}
