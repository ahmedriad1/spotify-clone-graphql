import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from './album-type.enum';
import { IntFilter } from './int-filter.input';
import { EnumAlbumTypeFilter } from './enum-album-type-filter.input';

@InputType()
export class EnumAlbumTypeWithAggregatesFilter {
    @Field(() => AlbumType, {nullable:true})
    equals?: AlbumType;

    @Field(() => [AlbumType], {nullable:true})
    in?: Array<AlbumType>;

    @Field(() => [AlbumType], {nullable:true})
    notIn?: Array<AlbumType>;

    @Field(() => EnumAlbumTypeWithAggregatesFilter, {nullable:true})
    not?: EnumAlbumTypeWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    count?: IntFilter;

    @Field(() => EnumAlbumTypeFilter, {nullable:true})
    _min?: EnumAlbumTypeFilter;

    @Field(() => EnumAlbumTypeFilter, {nullable:true})
    min?: EnumAlbumTypeFilter;

    @Field(() => EnumAlbumTypeFilter, {nullable:true})
    _max?: EnumAlbumTypeFilter;

    @Field(() => EnumAlbumTypeFilter, {nullable:true})
    max?: EnumAlbumTypeFilter;
}
