import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistCreateInput } from './artist-create.input';

@ArgsType()
export class CreateOneArtistArgs {
    @Field(() => ArtistCreateInput, {nullable:false})
    data!: ArtistCreateInput;
}
