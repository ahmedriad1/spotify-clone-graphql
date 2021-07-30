import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutAlbumInput } from './track-update-without-album.input';
import { TrackCreateWithoutAlbumInput } from './track-create-without-album.input';

@InputType()
export class TrackUpsertWithWhereUniqueWithoutAlbumInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutAlbumInput, {nullable:false})
    update!: TrackUpdateWithoutAlbumInput;

    @Field(() => TrackCreateWithoutAlbumInput, {nullable:false})
    create!: TrackCreateWithoutAlbumInput;
}
