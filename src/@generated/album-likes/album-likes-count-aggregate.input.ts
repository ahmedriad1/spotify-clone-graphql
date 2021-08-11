import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    albumId?: true;

    @Field(() => Boolean, {nullable:true})
    userId?: true;

    @Field(() => Boolean, {nullable:true})
    likedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
