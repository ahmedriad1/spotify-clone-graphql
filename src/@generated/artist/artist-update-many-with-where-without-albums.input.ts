import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistScalarWhereInput } from './artist-scalar-where.input';
import { ArtistUpdateManyMutationInput } from './artist-update-many-mutation.input';

@InputType()
export class ArtistUpdateManyWithWhereWithoutAlbumsInput {
    @Field(() => ArtistScalarWhereInput, {nullable:false})
    where!: ArtistScalarWhereInput;

    @Field(() => ArtistUpdateManyMutationInput, {nullable:false})
    data!: ArtistUpdateManyMutationInput;
}
