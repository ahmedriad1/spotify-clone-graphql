import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesWhereInput } from './album-likes-where.input';

@InputType()
export class AlbumLikesListRelationFilter {
    @Field(() => AlbumLikesWhereInput, {nullable:true})
    every?: AlbumLikesWhereInput;

    @Field(() => AlbumLikesWhereInput, {nullable:true})
    some?: AlbumLikesWhereInput;

    @Field(() => AlbumLikesWhereInput, {nullable:true})
    none?: AlbumLikesWhereInput;
}
