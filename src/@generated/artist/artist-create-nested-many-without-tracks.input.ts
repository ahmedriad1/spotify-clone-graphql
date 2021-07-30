import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistCreateWithoutTracksInput } from './artist-create-without-tracks.input';
import { ArtistCreateOrConnectWithoutTracksInput } from './artist-create-or-connect-without-tracks.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';

@InputType()
export class ArtistCreateNestedManyWithoutTracksInput {
    @Field(() => [ArtistCreateWithoutTracksInput], {nullable:true})
    create?: Array<ArtistCreateWithoutTracksInput>;

    @Field(() => [ArtistCreateOrConnectWithoutTracksInput], {nullable:true})
    connectOrCreate?: Array<ArtistCreateOrConnectWithoutTracksInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    connect?: Array<ArtistWhereUniqueInput>;
}
