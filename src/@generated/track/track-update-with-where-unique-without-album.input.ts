import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutAlbumInput } from './track-update-without-album.input';

@InputType()
export class TrackUpdateWithWhereUniqueWithoutAlbumInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutAlbumInput, {nullable:false})
    data!: TrackUpdateWithoutAlbumInput;
}
