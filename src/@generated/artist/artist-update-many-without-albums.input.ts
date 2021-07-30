import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistCreateWithoutAlbumsInput } from './artist-create-without-albums.input';
import { ArtistCreateOrConnectWithoutAlbumsInput } from './artist-create-or-connect-without-albums.input';
import { ArtistUpsertWithWhereUniqueWithoutAlbumsInput } from './artist-upsert-with-where-unique-without-albums.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistUpdateWithWhereUniqueWithoutAlbumsInput } from './artist-update-with-where-unique-without-albums.input';
import { ArtistUpdateManyWithWhereWithoutAlbumsInput } from './artist-update-many-with-where-without-albums.input';
import { ArtistScalarWhereInput } from './artist-scalar-where.input';

@InputType()
export class ArtistUpdateManyWithoutAlbumsInput {
    @Field(() => [ArtistCreateWithoutAlbumsInput], {nullable:true})
    create?: Array<ArtistCreateWithoutAlbumsInput>;

    @Field(() => [ArtistCreateOrConnectWithoutAlbumsInput], {nullable:true})
    connectOrCreate?: Array<ArtistCreateOrConnectWithoutAlbumsInput>;

    @Field(() => [ArtistUpsertWithWhereUniqueWithoutAlbumsInput], {nullable:true})
    upsert?: Array<ArtistUpsertWithWhereUniqueWithoutAlbumsInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    connect?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    set?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    disconnect?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    delete?: Array<ArtistWhereUniqueInput>;

    @Field(() => [ArtistUpdateWithWhereUniqueWithoutAlbumsInput], {nullable:true})
    update?: Array<ArtistUpdateWithWhereUniqueWithoutAlbumsInput>;

    @Field(() => [ArtistUpdateManyWithWhereWithoutAlbumsInput], {nullable:true})
    updateMany?: Array<ArtistUpdateManyWithWhereWithoutAlbumsInput>;

    @Field(() => [ArtistScalarWhereInput], {nullable:true})
    deleteMany?: Array<ArtistScalarWhereInput>;
}
