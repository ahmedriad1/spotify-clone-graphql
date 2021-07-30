import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistUpdateWithoutTracksInput } from './artist-update-without-tracks.input';

@InputType()
export class ArtistUpdateWithWhereUniqueWithoutTracksInput {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistUpdateWithoutTracksInput, {nullable:false})
    data!: ArtistUpdateWithoutTracksInput;
}
