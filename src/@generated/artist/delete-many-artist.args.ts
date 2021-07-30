import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistWhereInput } from './artist-where.input';

@ArgsType()
export class DeleteManyArtistArgs {
    @Field(() => ArtistWhereInput, {nullable:true})
    where?: ArtistWhereInput;
}
