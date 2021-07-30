import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereInput } from './artist-where.input';

@InputType()
export class ArtistListRelationFilter {
    @Field(() => ArtistWhereInput, {nullable:true})
    every?: ArtistWhereInput;

    @Field(() => ArtistWhereInput, {nullable:true})
    some?: ArtistWhereInput;

    @Field(() => ArtistWhereInput, {nullable:true})
    none?: ArtistWhereInput;
}
