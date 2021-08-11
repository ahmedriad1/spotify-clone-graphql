import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumUpdateOneRequiredWithoutLikedByInput } from '../album/album-update-one-required-without-liked-by.input';
import { UserUpdateOneRequiredWithoutLikedAlbumsInput } from '../user/user-update-one-required-without-liked-albums.input';

@InputType()
export class AlbumLikesUpdateInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => AlbumUpdateOneRequiredWithoutLikedByInput, {nullable:true})
    album?: AlbumUpdateOneRequiredWithoutLikedByInput;

    @Field(() => UserUpdateOneRequiredWithoutLikedAlbumsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLikedAlbumsInput;
}
