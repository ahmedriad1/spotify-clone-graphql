import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateNestedOneWithoutLikedByInput } from '../album/album-create-nested-one-without-liked-by.input';
import { UserCreateNestedOneWithoutLikedAlbumsInput } from '../user/user-create-nested-one-without-liked-albums.input';

@InputType()
export class AlbumLikesCreateInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => AlbumCreateNestedOneWithoutLikedByInput, {nullable:false})
    album!: AlbumCreateNestedOneWithoutLikedByInput;

    @Field(() => UserCreateNestedOneWithoutLikedAlbumsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikedAlbumsInput;
}
