import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistUpdateWithoutAlbumsInput } from './artist-update-without-albums.input';

@InputType()
export class ArtistUpdateWithWhereUniqueWithoutAlbumsInput {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistUpdateWithoutAlbumsInput, {nullable:false})
    data!: ArtistUpdateWithoutAlbumsInput;
}
