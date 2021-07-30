import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateNestedManyWithoutLikedByInput } from '../track/track-create-nested-many-without-liked-by.input';
import { AlbumCreateNestedManyWithoutLikedByInput } from '../album/album-create-nested-many-without-liked-by.input';

@InputType()
export class UserCreateWithoutArtistInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrackCreateNestedManyWithoutLikedByInput, {nullable:true})
    likedTracks?: TrackCreateNestedManyWithoutLikedByInput;

    @Field(() => AlbumCreateNestedManyWithoutLikedByInput, {nullable:true})
    likedAlbums?: AlbumCreateNestedManyWithoutLikedByInput;
}
