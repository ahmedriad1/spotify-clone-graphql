import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistUpdateOneWithoutUserInput } from '../artist/artist-update-one-without-user.input';
import { AlbumLikesUpdateManyWithoutUserInput } from '../album-likes/album-likes-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutLikedTracksInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArtistUpdateOneWithoutUserInput, {nullable:true})
    artist?: ArtistUpdateOneWithoutUserInput;

    @Field(() => AlbumLikesUpdateManyWithoutUserInput, {nullable:true})
    likedAlbums?: AlbumLikesUpdateManyWithoutUserInput;
}
