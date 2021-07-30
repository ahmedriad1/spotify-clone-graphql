import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistCreateWithoutAlbumsInput } from './artist-create-without-albums.input';

@InputType()
export class ArtistCreateOrConnectWithoutAlbumsInput {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistCreateWithoutAlbumsInput, {nullable:false})
    create!: ArtistCreateWithoutAlbumsInput;
}
