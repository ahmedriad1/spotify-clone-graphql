import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AlbumMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => AlbumType, {nullable:true})
    type?: AlbumType;

    @Field(() => String, {nullable:true})
    imageId?: string;

    @Field(() => String, {nullable:true})
    genreId?: string;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
