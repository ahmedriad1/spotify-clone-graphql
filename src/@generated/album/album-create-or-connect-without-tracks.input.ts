import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { AlbumCreateWithoutTracksInput } from './album-create-without-tracks.input';

@InputType()
export class AlbumCreateOrConnectWithoutTracksInput {
    @Field(() => AlbumWhereUniqueInput, {nullable:false})
    where!: AlbumWhereUniqueInput;

    @Field(() => AlbumCreateWithoutTracksInput, {nullable:false})
    create!: AlbumCreateWithoutTracksInput;
}
