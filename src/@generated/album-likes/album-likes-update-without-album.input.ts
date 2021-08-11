import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutLikedAlbumsInput } from '../user/user-update-one-required-without-liked-albums.input';

@InputType()
export class AlbumLikesUpdateWithoutAlbumInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutLikedAlbumsInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLikedAlbumsInput;
}
