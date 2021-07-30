import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    duration?: true;

    @Field(() => Boolean, {nullable:true})
    trackId?: true;

    @Field(() => Boolean, {nullable:true})
    genreId?: true;

    @Field(() => Boolean, {nullable:true})
    albumId?: true;

    @Field(() => Boolean, {nullable:true})
    likesCount?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
