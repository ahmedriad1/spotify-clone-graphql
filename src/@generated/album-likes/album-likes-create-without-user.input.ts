import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateNestedOneWithoutLikedByInput } from '../album/album-create-nested-one-without-liked-by.input';

@InputType()
export class AlbumLikesCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => AlbumCreateNestedOneWithoutLikedByInput, {nullable:false})
    album!: AlbumCreateNestedOneWithoutLikedByInput;
}
