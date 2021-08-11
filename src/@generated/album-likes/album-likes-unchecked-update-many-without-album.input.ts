import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesCreateWithoutAlbumInput } from './album-likes-create-without-album.input';
import { AlbumLikesCreateOrConnectWithoutAlbumInput } from './album-likes-create-or-connect-without-album.input';
import { AlbumLikesUpsertWithWhereUniqueWithoutAlbumInput } from './album-likes-upsert-with-where-unique-without-album.input';
import { AlbumLikesCreateManyAlbumInputEnvelope } from './album-likes-create-many-album-input-envelope.input';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesUpdateWithWhereUniqueWithoutAlbumInput } from './album-likes-update-with-where-unique-without-album.input';
import { AlbumLikesUpdateManyWithWhereWithoutAlbumInput } from './album-likes-update-many-with-where-without-album.input';
import { AlbumLikesScalarWhereInput } from './album-likes-scalar-where.input';

@InputType()
export class AlbumLikesUncheckedUpdateManyWithoutAlbumInput {
    @Field(() => [AlbumLikesCreateWithoutAlbumInput], {nullable:true})
    create?: Array<AlbumLikesCreateWithoutAlbumInput>;

    @Field(() => [AlbumLikesCreateOrConnectWithoutAlbumInput], {nullable:true})
    connectOrCreate?: Array<AlbumLikesCreateOrConnectWithoutAlbumInput>;

    @Field(() => [AlbumLikesUpsertWithWhereUniqueWithoutAlbumInput], {nullable:true})
    upsert?: Array<AlbumLikesUpsertWithWhereUniqueWithoutAlbumInput>;

    @Field(() => AlbumLikesCreateManyAlbumInputEnvelope, {nullable:true})
    createMany?: AlbumLikesCreateManyAlbumInputEnvelope;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    connect?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    set?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    disconnect?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesWhereUniqueInput], {nullable:true})
    delete?: Array<AlbumLikesWhereUniqueInput>;

    @Field(() => [AlbumLikesUpdateWithWhereUniqueWithoutAlbumInput], {nullable:true})
    update?: Array<AlbumLikesUpdateWithWhereUniqueWithoutAlbumInput>;

    @Field(() => [AlbumLikesUpdateManyWithWhereWithoutAlbumInput], {nullable:true})
    updateMany?: Array<AlbumLikesUpdateManyWithWhereWithoutAlbumInput>;

    @Field(() => [AlbumLikesScalarWhereInput], {nullable:true})
    deleteMany?: Array<AlbumLikesScalarWhereInput>;
}
