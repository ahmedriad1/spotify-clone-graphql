import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutAlbumInput } from './track-create-without-album.input';
import { TrackCreateOrConnectWithoutAlbumInput } from './track-create-or-connect-without-album.input';
import { TrackCreateManyAlbumInputEnvelope } from './track-create-many-album-input-envelope.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@InputType()
export class TrackUncheckedCreateNestedManyWithoutAlbumInput {
    @Field(() => [TrackCreateWithoutAlbumInput], {nullable:true})
    create?: Array<TrackCreateWithoutAlbumInput>;

    @Field(() => [TrackCreateOrConnectWithoutAlbumInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutAlbumInput>;

    @Field(() => TrackCreateManyAlbumInputEnvelope, {nullable:true})
    createMany?: TrackCreateManyAlbumInputEnvelope;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;
}
