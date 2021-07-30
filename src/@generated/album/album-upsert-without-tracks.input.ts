import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumUpdateWithoutTracksInput } from './album-update-without-tracks.input';
import { AlbumCreateWithoutTracksInput } from './album-create-without-tracks.input';

@InputType()
export class AlbumUpsertWithoutTracksInput {
    @Field(() => AlbumUpdateWithoutTracksInput, {nullable:false})
    update!: AlbumUpdateWithoutTracksInput;

    @Field(() => AlbumCreateWithoutTracksInput, {nullable:false})
    create!: AlbumCreateWithoutTracksInput;
}
