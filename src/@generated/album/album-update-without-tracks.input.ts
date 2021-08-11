import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { GenreUpdateOneRequiredWithoutAlbumsInput } from '../genre/genre-update-one-required-without-albums.input';
import { ArtistUpdateManyWithoutAlbumsInput } from '../artist/artist-update-many-without-albums.input';
import { AlbumLikesUpdateManyWithoutAlbumInput } from '../album-likes/album-likes-update-many-without-album.input';

@InputType()
export class AlbumUpdateWithoutTracksInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => AlbumType, {nullable:true})
    type?: AlbumType;

    @Field(() => String, {nullable:true})
    imageId?: string;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GenreUpdateOneRequiredWithoutAlbumsInput, {nullable:true})
    genre?: GenreUpdateOneRequiredWithoutAlbumsInput;

    @Field(() => ArtistUpdateManyWithoutAlbumsInput, {nullable:true})
    artists?: ArtistUpdateManyWithoutAlbumsInput;

    @Field(() => AlbumLikesUpdateManyWithoutAlbumInput, {nullable:true})
    likedBy?: AlbumLikesUpdateManyWithoutAlbumInput;
}
