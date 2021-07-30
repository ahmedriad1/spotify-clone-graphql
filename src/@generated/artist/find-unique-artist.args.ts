import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';

@ArgsType()
export class FindUniqueArtistArgs {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;
}
