import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumWhereInput } from './album-where.input';

@InputType()
export class AlbumRelationFilter {
    @Field(() => AlbumWhereInput, {nullable:true})
    is?: AlbumWhereInput;

    @Field(() => AlbumWhereInput, {nullable:true})
    isNot?: AlbumWhereInput;
}
