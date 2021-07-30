import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TrackSumAggregate {
    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => Int, {nullable:true})
    likesCount?: number;
}
