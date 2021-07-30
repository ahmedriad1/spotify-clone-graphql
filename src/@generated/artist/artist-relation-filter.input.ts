import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereInput } from './artist-where.input';

@InputType()
export class ArtistRelationFilter {
    @Field(() => ArtistWhereInput, {nullable:true})
    is?: ArtistWhereInput;

    @Field(() => ArtistWhereInput, {nullable:true})
    isNot?: ArtistWhereInput;
}
