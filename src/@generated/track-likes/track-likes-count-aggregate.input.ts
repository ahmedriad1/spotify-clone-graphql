import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackLikesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    trackId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    likedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
