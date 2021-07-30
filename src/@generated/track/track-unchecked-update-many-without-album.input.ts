import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutAlbumInput } from './track-create-without-album.input';
import { TrackCreateOrConnectWithoutAlbumInput } from './track-create-or-connect-without-album.input';
import { TrackUpsertWithWhereUniqueWithoutAlbumInput } from './track-upsert-with-where-unique-without-album.input';
import { TrackCreateManyAlbumInputEnvelope } from './track-create-many-album-input-envelope.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithWhereUniqueWithoutAlbumInput } from './track-update-with-where-unique-without-album.input';
import { TrackUpdateManyWithWhereWithoutAlbumInput } from './track-update-many-with-where-without-album.input';
import { TrackScalarWhereInput } from './track-scalar-where.input';

@InputType()
export class TrackUncheckedUpdateManyWithoutAlbumInput {
    @Field(() => [TrackCreateWithoutAlbumInput], {nullable:true})
    create?: Array<TrackCreateWithoutAlbumInput>;

    @Field(() => [TrackCreateOrConnectWithoutAlbumInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutAlbumInput>;

    @Field(() => [TrackUpsertWithWhereUniqueWithoutAlbumInput], {nullable:true})
    upsert?: Array<TrackUpsertWithWhereUniqueWithoutAlbumInput>;

    @Field(() => TrackCreateManyAlbumInputEnvelope, {nullable:true})
    createMany?: TrackCreateManyAlbumInputEnvelope;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    set?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    disconnect?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    delete?: Array<TrackWhereUniqueInput>;

    @Field(() => [TrackUpdateWithWhereUniqueWithoutAlbumInput], {nullable:true})
    update?: Array<TrackUpdateWithWhereUniqueWithoutAlbumInput>;

    @Field(() => [TrackUpdateManyWithWhereWithoutAlbumInput], {nullable:true})
    updateMany?: Array<TrackUpdateManyWithWhereWithoutAlbumInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    deleteMany?: Array<TrackScalarWhereInput>;
}
