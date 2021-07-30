import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumType } from './album-type.enum';

@InputType()
export class EnumAlbumTypeFilter {
    @Field(() => AlbumType, {nullable:true})
    equals?: AlbumType;

    @Field(() => [AlbumType], {nullable:true})
    in?: Array<AlbumType>;

    @Field(() => [AlbumType], {nullable:true})
    notIn?: Array<AlbumType>;

    @Field(() => EnumAlbumTypeFilter, {nullable:true})
    not?: EnumAlbumTypeFilter;
}
