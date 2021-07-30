import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistUpdateWithoutAlbumsInput } from './artist-update-without-albums.input';
import { ArtistCreateWithoutAlbumsInput } from './artist-create-without-albums.input';

@InputType()
export class ArtistUpsertWithWhereUniqueWithoutAlbumsInput {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistUpdateWithoutAlbumsInput, {nullable:false})
    update!: ArtistUpdateWithoutAlbumsInput;

    @Field(() => ArtistCreateWithoutAlbumsInput, {nullable:false})
    create!: ArtistCreateWithoutAlbumsInput;
}
