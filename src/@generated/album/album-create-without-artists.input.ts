import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { GenreCreateNestedOneWithoutAlbumsInput } from '../genre/genre-create-nested-one-without-albums.input';
import { TrackCreateNestedManyWithoutAlbumInput } from '../track/track-create-nested-many-without-album.input';
import { AlbumLikesCreateNestedManyWithoutAlbumInput } from '../album-likes/album-likes-create-nested-many-without-album.input';

@InputType()
export class AlbumCreateWithoutArtistsInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

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

    @Field(() => GenreCreateNestedOneWithoutAlbumsInput, {nullable:false})
    genre!: GenreCreateNestedOneWithoutAlbumsInput;

    @Field(() => TrackCreateNestedManyWithoutAlbumInput, {nullable:true})
    tracks?: TrackCreateNestedManyWithoutAlbumInput;

    @Field(() => AlbumLikesCreateNestedManyWithoutAlbumInput, {nullable:true})
    likedBy?: AlbumLikesCreateNestedManyWithoutAlbumInput;
}
