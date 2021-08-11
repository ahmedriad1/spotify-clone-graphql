import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AlbumLikesMaxAggregate {
    @Field(() => String, {nullable:true})
    albumId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
