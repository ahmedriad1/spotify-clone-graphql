import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesUncheckedCreateNestedManyWithoutUserInput } from '../track-likes/track-likes-unchecked-create-nested-many-without-user.input';
import { AlbumLikesUncheckedCreateNestedManyWithoutUserInput } from '../album-likes/album-likes-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutArtistInput {
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

    @Field(() => TrackLikesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedTracks?: TrackLikesUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => AlbumLikesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedAlbums?: AlbumLikesUncheckedCreateNestedManyWithoutUserInput;
}
