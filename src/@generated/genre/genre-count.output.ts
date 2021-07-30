import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GenreCount {
    @Field(() => Int, {nullable:false})
    albums!: number;

    @Field(() => Int, {nullable:false})
    tracks!: number;
}
