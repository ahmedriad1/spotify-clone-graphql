import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { TrackUncheckedUpdateManyWithoutAlbumInput } from '../track/track-unchecked-update-many-without-album.input';
import { AlbumLikesUncheckedUpdateManyWithoutAlbumInput } from '../album-likes/album-likes-unchecked-update-many-without-album.input';

@InputType()
export class AlbumUncheckedUpdateWithoutGenreInput {
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

    @Field(() => TrackUncheckedUpdateManyWithoutAlbumInput, {nullable:true})
    tracks?: TrackUncheckedUpdateManyWithoutAlbumInput;

    @Field(() => AlbumLikesUncheckedUpdateManyWithoutAlbumInput, {nullable:true})
    likedBy?: AlbumLikesUncheckedUpdateManyWithoutAlbumInput;
}
