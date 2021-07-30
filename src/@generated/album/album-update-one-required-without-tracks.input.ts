import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutTracksInput } from './album-create-without-tracks.input';
import { AlbumCreateOrConnectWithoutTracksInput } from './album-create-or-connect-without-tracks.input';
import { AlbumUpsertWithoutTracksInput } from './album-upsert-without-tracks.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumUpdateWithoutTracksInput } from './album-update-without-tracks.input';

@InputType()
export class AlbumUpdateOneRequiredWithoutTracksInput {
    @Field(() => AlbumCreateWithoutTracksInput, {nullable:true})
    create?: AlbumCreateWithoutTracksInput;

    @Field(() => AlbumCreateOrConnectWithoutTracksInput, {nullable:true})
    connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput;

    @Field(() => AlbumUpsertWithoutTracksInput, {nullable:true})
    upsert?: AlbumUpsertWithoutTracksInput;

    @Field(() => AlbumWhereUniqueInput, {nullable:true})
    connect?: AlbumWhereUniqueInput;

    @Field(() => AlbumUpdateWithoutTracksInput, {nullable:true})
    update?: AlbumUpdateWithoutTracksInput;
}
