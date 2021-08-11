import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesUpdateWithoutAlbumInput } from './album-likes-update-without-album.input';
import { AlbumLikesCreateWithoutAlbumInput } from './album-likes-create-without-album.input';

@InputType()
export class AlbumLikesUpsertWithWhereUniqueWithoutAlbumInput {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;

    @Field(() => AlbumLikesUpdateWithoutAlbumInput, {nullable:false})
    update!: AlbumLikesUpdateWithoutAlbumInput;

    @Field(() => AlbumLikesCreateWithoutAlbumInput, {nullable:false})
    create!: AlbumLikesCreateWithoutAlbumInput;
}
