import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AlbumCount {
    @Field(() => Int, {nullable:false})
    artists!: number;

    @Field(() => Int, {nullable:false})
    tracks!: number;

    @Field(() => Int, {nullable:false})
    likedBy!: number;
}
