import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AlbumAvgAggregate {
    @Field(() => Float, {nullable:true})
    likesCount?: number;
}
