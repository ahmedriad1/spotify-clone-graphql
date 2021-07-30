import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistCreateInput } from './artist-create.input';
import { ArtistUpdateInput } from './artist-update.input';

@ArgsType()
export class UpsertOneArtistArgs {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistCreateInput, {nullable:false})
    create!: ArtistCreateInput;

    @Field(() => ArtistUpdateInput, {nullable:false})
    update!: ArtistUpdateInput;
}
