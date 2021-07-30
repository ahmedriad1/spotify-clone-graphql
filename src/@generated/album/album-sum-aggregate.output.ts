import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AlbumSumAggregate {
    @Field(() => Int, {nullable:true})
    likesCount?: number;
}
