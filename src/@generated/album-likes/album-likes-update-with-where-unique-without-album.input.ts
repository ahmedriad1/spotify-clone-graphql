import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesUpdateWithoutAlbumInput } from './album-likes-update-without-album.input';

@InputType()
export class AlbumLikesUpdateWithWhereUniqueWithoutAlbumInput {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;

    @Field(() => AlbumLikesUpdateWithoutAlbumInput, {nullable:false})
    data!: AlbumLikesUpdateWithoutAlbumInput;
}
