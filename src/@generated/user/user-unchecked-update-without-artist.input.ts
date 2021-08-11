import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesUncheckedUpdateManyWithoutUserInput } from '../track-likes/track-likes-unchecked-update-many-without-user.input';
import { AlbumLikesUncheckedUpdateManyWithoutUserInput } from '../album-likes/album-likes-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutArtistInput {
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

    @Field(() => TrackLikesUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likedTracks?: TrackLikesUncheckedUpdateManyWithoutUserInput;

    @Field(() => AlbumLikesUncheckedUpdateManyWithoutUserInput, {nullable:true})
    likedAlbums?: AlbumLikesUncheckedUpdateManyWithoutUserInput;
}
