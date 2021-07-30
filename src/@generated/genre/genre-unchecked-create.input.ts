import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumUncheckedCreateNestedManyWithoutGenreInput } from '../album/album-unchecked-create-nested-many-without-genre.input';
import { TrackUncheckedCreateNestedManyWithoutGenreInput } from '../track/track-unchecked-create-nested-many-without-genre.input';

@InputType()
export class GenreUncheckedCreateInput {
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

    @Field(() => AlbumUncheckedCreateNestedManyWithoutGenreInput, {nullable:true})
    albums?: AlbumUncheckedCreateNestedManyWithoutGenreInput;

    @Field(() => TrackUncheckedCreateNestedManyWithoutGenreInput, {nullable:true})
    tracks?: TrackUncheckedCreateNestedManyWithoutGenreInput;
}
