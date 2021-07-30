import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistCreateWithoutTracksInput } from './artist-create-without-tracks.input';
import { ArtistCreateOrConnectWithoutTracksInput } from './artist-create-or-connect-without-tracks.input';
import { ArtistUpsertWithWhereUniqueWithoutTracksInput } from './artist-upsert-with-where-unique-without-tracks.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistUpdateWithWhereUniqueWithoutTracksInput } from './artist-update-with-where-unique-without-tracks.input';
import { ArtistUpdateManyWithWhereWithoutTracksInput } from './artist-update-many-with-where-without-tracks.input';
import { ArtistScalarWhereInput } from './artist-scalar-where.input';

@InputType()
export class ArtistUpdateManyWithoutTracksInput {
    @Field(() => [ArtistCreateWithoutTracksInput], {nullable:true})
    create?: Array<ArtistCreateWithoutTracksInput>;

    @Field(() => [ArtistCreateOrConnectWithoutTracksInput], {nullable:true})
    connectOrCreate?: Array<ArtistCreateOrConnectWithoutTracksInput>;

    @Field(() => [ArtistUpsertWithWhereUniqueWithoutTracksInput], {nullable:true})
    upsert?: Array<ArtistUpsertWithWhereUniqueWithoutTracksInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    connect?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    set?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    disconnect?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    delete?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistUpdateWithWhereUniqueWithoutTracksInput], {nullable:true})
    update?: Array<ArtistUpdateWithWhereUniqueWithoutTracksInput>;

    @Field(() => [ArtistUpdateManyWithWhereWithoutTracksInput], {nullable:true})
    updateMany?: Array<ArtistUpdateManyWithWhereWithoutTracksInput>;

    @Field(() => [ArtistScalarWhereInput], {nullable:true})
    deleteMany?: Array<ArtistScalarWhereInput>;
}
