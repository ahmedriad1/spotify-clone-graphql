import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';
import { GenreCreateNestedOneWithoutAlbumsInput } from '../genre/genre-create-nested-one-without-albums.input';
import { ArtistCreateNestedManyWithoutAlbumsInput } from '../artist/artist-create-nested-many-without-albums.input';
import { UserCreateNestedManyWithoutLikedAlbumsInput } from '../user/user-create-nested-many-without-liked-albums.input';

@InputType()
export class AlbumCreateWithoutTracksInput {
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

    @Field(() => ArtistCreateNestedManyWithoutAlbumsInput, {nullable:true})
    artists?: ArtistCreateNestedManyWithoutAlbumsInput;

    @Field(() => UserCreateNestedManyWithoutLikedAlbumsInput, {nullable:true})
    likedBy?: UserCreateNestedManyWithoutLikedAlbumsInput;
}
