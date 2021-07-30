import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistUpdateOneWithoutUserInput } from '../artist/artist-update-one-without-user.input';
import { TrackUpdateManyWithoutLikedByInput } from '../track/track-update-many-without-liked-by.input';
import { AlbumUpdateManyWithoutLikedByInput } from '../album/album-update-many-without-liked-by.input';

@InputType()
export class UserUpdateInput {
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

    @Field(() => TrackUpdateManyWithoutLikedByInput, {nullable:true})
    likedTracks?: TrackUpdateManyWithoutLikedByInput;

    @Field(() => AlbumUpdateManyWithoutLikedByInput, {nullable:true})
    likedAlbums?: AlbumUpdateManyWithoutLikedByInput;
}
