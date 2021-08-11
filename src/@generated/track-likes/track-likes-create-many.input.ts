import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackLikesCreateManyInput {
    @Field(() => String, {nullable:false})
    trackId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
