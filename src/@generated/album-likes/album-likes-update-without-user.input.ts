import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumUpdateOneRequiredWithoutLikedByInput } from '../album/album-update-one-required-without-liked-by.input';

@InputType()
export class AlbumLikesUpdateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => AlbumUpdateOneRequiredWithoutLikedByInput, {nullable:true})
    album?: AlbumUpdateOneRequiredWithoutLikedByInput;
}
