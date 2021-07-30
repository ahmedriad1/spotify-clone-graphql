import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumWhereInput } from './album-where.input';
import { AlbumOrderByInput } from './album-order-by.input';
import { AlbumWhereUniqueInput } from './album-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlbumScalarFieldEnum } from './album-scalar-field.enum';

@ArgsType()
export class FindFirstAlbumArgs {
    @Field(() => AlbumWhereInput, {nullable:true})
    where?: AlbumWhereInput;

    @Field(() => [AlbumOrderByInput], {nullable:true})
    orderBy?: Array<AlbumOrderByInput>;

    @Field(() => AlbumWhereUniqueInput, {nullable:true})
    cursor?: AlbumWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AlbumScalarFieldEnum], {nullable:true})
    distinct?: Array<AlbumScalarFieldEnum>;
}
