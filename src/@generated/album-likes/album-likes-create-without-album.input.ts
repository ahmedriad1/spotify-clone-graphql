import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLikedAlbumsInput } from '../user/user-create-nested-one-without-liked-albums.input';

@InputType()
export class AlbumLikesCreateWithoutAlbumInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutLikedAlbumsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikedAlbumsInput;
}
