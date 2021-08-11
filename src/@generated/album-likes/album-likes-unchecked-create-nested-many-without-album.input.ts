import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesCreateWithoutAlbumInput } from './album-likes-create-without-album.input';
import { AlbumLikesCreateOrConnectWithoutAlbumInput } from './album-likes-create-or-connect-without-album.input';
import { AlbumLikesCreateManyAlbumInputEnvelope } from './album-likes-create-many-album-input-envelope.input';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';

@InputType()
export class AlbumLikesUncheckedCreateNestedManyWithoutAlbumInput {
    @Field(() => [AlbumLikesCreateWithoutAlbumInput], {nullable:true})
    create?: Array<AlbumLikesCreateWithoutAlbumInput>;

    @Field(() => [AlbumLikesCreateOrConnectWithoutAlbumInput], {nullable:true})
    connectOrCreate?: Array<AlbumLikesCreateOrConnectWithoutAlbumInput>;

    @Field(() => AlbumLikesCreateManyAlbumInputEnvelope, {nullable:true})
    createMany?: AlbumLikesCreateManyAlbumInputEnvelope;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumLikesWhereUniqueInput>;
}
