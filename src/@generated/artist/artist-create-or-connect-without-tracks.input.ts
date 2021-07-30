import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistCreateWithoutTracksInput } from './artist-create-without-tracks.input';

@InputType()
export class ArtistCreateOrConnectWithoutTracksInput {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistCreateWithoutTracksInput, {nullable:false})
    create!: ArtistCreateWithoutTracksInput;
}
