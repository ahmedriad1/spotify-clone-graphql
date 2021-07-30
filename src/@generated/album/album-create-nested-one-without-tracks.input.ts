import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumCreateWithoutTracksInput } from './album-create-without-tracks.input';
import { AlbumCreateOrConnectWithoutTracksInput } from './album-create-or-connect-without-tracks.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';

@InputType()
export class AlbumCreateNestedOneWithoutTracksInput {
    @Field(() => AlbumCreateWithoutTracksInput, {nullable:true})
    create?: AlbumCreateWithoutTracksInput;

    @Field(() => AlbumCreateOrConnectWithoutTracksInput, {nullable:true})
    connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput;

    @Field(() => AlbumWhereUniqueInput, {nullable:true})
    connect?: AlbumWhereUniqueInput;
}
