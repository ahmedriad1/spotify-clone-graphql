import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesCreateNestedManyWithoutUserInput } from '../track-likes/track-likes-create-nested-many-without-user.input';
import { AlbumLikesCreateNestedManyWithoutUserInput } from '../album-likes/album-likes-create-nested-many-without-user.input';

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

    @Field(() => TrackLikesCreateNestedManyWithoutUserInput, {nullable:true})
    likedTracks?: TrackLikesCreateNestedManyWithoutUserInput;

    @Field(() => AlbumLikesCreateNestedManyWithoutUserInput, {nullable:true})
    likedAlbums?: AlbumLikesCreateNestedManyWithoutUserInput;
}
