import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TrackAvgAggregate {
    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => Float, {nullable:true})
    likesCount?: number;
}
