import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesCreateWithoutAlbumInput } from './album-likes-create-without-album.input';

@InputType()
export class AlbumLikesCreateOrConnectWithoutAlbumInput {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;

    @Field(() => AlbumLikesCreateWithoutAlbumInput, {nullable:false})
    create!: AlbumLikesCreateWithoutAlbumInput;
}
