import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackCreateWithoutAlbumInput } from './track-create-without-album.input';

@InputType()
export class TrackCreateOrConnectWithoutAlbumInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackCreateWithoutAlbumInput, {nullable:false})
    create!: TrackCreateWithoutAlbumInput;
}
