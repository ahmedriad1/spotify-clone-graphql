import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesWhereInput } from './album-likes-where.input';
import { AlbumLikesOrderByInput } from './album-likes-order-by.input';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlbumLikesScalarFieldEnum } from './album-likes-scalar-field.enum';

@ArgsType()
export class FindManyAlbumLikesArgs {
    @Field(() => AlbumLikesWhereInput, {nullable:true})
    where?: AlbumLikesWhereInput;

    @Field(() => [AlbumLikesOrderByInput], {nullable:true})
    orderBy?: Array<AlbumLikesOrderByInput>;

    @Field(() => AlbumLikesWhereUniqueInput, {nullable:true})
    cursor?: AlbumLikesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AlbumLikesScalarFieldEnum], {nullable:true})
    distinct?: Array<AlbumLikesScalarFieldEnum>;
}
