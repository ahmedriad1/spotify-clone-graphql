import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TrackLikesMaxAggregate {
    @Field(() => String, {nullable:true})
    trackId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
