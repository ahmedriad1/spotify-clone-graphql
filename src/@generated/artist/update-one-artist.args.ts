import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistUpdateInput } from './artist-update.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';

@ArgsType()
export class UpdateOneArtistArgs {
    @Field(() => ArtistUpdateInput, {nullable:false})
    data!: ArtistUpdateInput;

    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;
}
