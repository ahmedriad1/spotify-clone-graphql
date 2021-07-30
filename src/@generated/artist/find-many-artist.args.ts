import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ArtistWhereInput } from './artist-where.input';
import { ArtistOrderByInput } from './artist-order-by.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ArtistScalarFieldEnum } from './artist-scalar-field.enum';

@ArgsType()
export class FindManyArtistArgs {
    @Field(() => ArtistWhereInput, {nullable:true})
    where?: ArtistWhereInput;

    @Field(() => [ArtistOrderByInput], {nullable:true})
    orderBy?: Array<ArtistOrderByInput>;

    @Field(() => ArtistWhereUniqueInput, {nullable:true})
    cursor?: ArtistWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ArtistScalarFieldEnum], {nullable:true})
    distinct?: Array<ArtistScalarFieldEnum>;
}
