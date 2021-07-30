import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistCreateWithoutAlbumsInput } from './artist-create-without-albums.input';
import { ArtistCreateOrConnectWithoutAlbumsInput } from './artist-create-or-connect-without-albums.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';

@InputType()
export class ArtistCreateNestedManyWithoutAlbumsInput {
    @Field(() => [ArtistCreateWithoutAlbumsInput], {nullable:true})
    create?: Array<ArtistCreateWithoutAlbumsInput>;

    @Field(() => [ArtistCreateOrConnectWithoutAlbumsInput], {nullable:true})
    connectOrCreate?: Array<ArtistCreateOrConnectWithoutAlbumsInput>;

    @Field(() => [ArtistWhereUniqueInput], {nullable:true})
    connect?: Array<ArtistWhereUniqueInput>;
}
