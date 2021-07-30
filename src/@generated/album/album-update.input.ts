import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { GenreUpdateOneRequiredWithoutAlbumsInput } from '../genre/genre-update-one-required-without-albums.input';
import { ArtistUpdateManyWithoutAlbumsInput } from '../artist/artist-update-many-without-albums.input';
import { TrackUpdateManyWithoutAlbumInput } from '../track/track-update-many-without-album.input';
import { UserUpdateManyWithoutLikedAlbumsInput } from '../user/user-update-many-without-liked-albums.input';

@InputType()
export class AlbumUpdateInput {
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

    @Field(() => TrackUpdateManyWithoutAlbumInput, {nullable:true})
    tracks?: TrackUpdateManyWithoutAlbumInput;

    @Field(() => UserUpdateManyWithoutLikedAlbumsInput, {nullable:true})
    likedBy?: UserUpdateManyWithoutLikedAlbumsInput;
}
