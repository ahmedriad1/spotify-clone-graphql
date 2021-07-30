import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistUpdateWithoutTracksInput } from './artist-update-without-tracks.input';
import { ArtistCreateWithoutTracksInput } from './artist-create-without-tracks.input';

@InputType()
export class ArtistUpsertWithWhereUniqueWithoutTracksInput {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistUpdateWithoutTracksInput, {nullable:false})
    update!: ArtistUpdateWithoutTracksInput;

    @Field(() => ArtistCreateWithoutTracksInput, {nullable:false})
    create!: ArtistCreateWithoutTracksInput;
}
