import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { TrackUncheckedCreateNestedManyWithoutAlbumInput } from '../track/track-unchecked-create-nested-many-without-album.input';
import { AlbumLikesUncheckedCreateNestedManyWithoutAlbumInput } from '../album-likes/album-likes-unchecked-create-nested-many-without-album.input';

@InputType()
export class AlbumUncheckedCreateInput {
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

    @Field(() => String, {nullable:false})
    genreId!: string;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrackUncheckedCreateNestedManyWithoutAlbumInput, {nullable:true})
    tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput;

    @Field(() => AlbumLikesUncheckedCreateNestedManyWithoutAlbumInput, {nullable:true})
    likedBy?: AlbumLikesUncheckedCreateNestedManyWithoutAlbumInput;
}
