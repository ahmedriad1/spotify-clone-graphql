import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereInput } from './album-where.input';

@InputType()
export class AlbumListRelationFilter {
    @Field(() => AlbumWhereInput, {nullable:true})
    every?: AlbumWhereInput;

    @Field(() => AlbumWhereInput, {nullable:true})
    some?: AlbumWhereInput;

    @Field(() => AlbumWhereInput, {nullable:true})
    none?: AlbumWhereInput;
}
