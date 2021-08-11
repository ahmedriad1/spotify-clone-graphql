import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackLikesCreateManyUserInput {
    @Field(() => String, {nullable:false})
    trackId!: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
