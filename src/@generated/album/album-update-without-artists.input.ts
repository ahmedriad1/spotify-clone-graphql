import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { GenreUpdateOneRequiredWithoutAlbumsInput } from '../genre/genre-update-one-required-without-albums.input';
import { TrackUpdateManyWithoutAlbumInput } from '../track/track-update-many-without-album.input';
import { AlbumLikesUpdateManyWithoutAlbumInput } from '../album-likes/album-likes-update-many-without-album.input';

@InputType()
export class AlbumUpdateWithoutArtistsInput {
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

    @Field(() => TrackUpdateManyWithoutAlbumInput, {nullable:true})
    tracks?: TrackUpdateManyWithoutAlbumInput;

    @Field(() => AlbumLikesUpdateManyWithoutAlbumInput, {nullable:true})
    likedBy?: AlbumLikesUpdateManyWithoutAlbumInput;
}
