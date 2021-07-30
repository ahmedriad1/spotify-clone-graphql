import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistUpdateManyMutationInput } from './artist-update-many-mutation.input';
import { ArtistWhereInput } from './artist-where.input';

@ArgsType()
export class UpdateManyArtistArgs {
    @Field(() => ArtistUpdateManyMutationInput, {nullable:false})
    data!: ArtistUpdateManyMutationInput;

    @Field(() => ArtistWhereInput, {nullable:true})
    where?: ArtistWhereInput;
}
