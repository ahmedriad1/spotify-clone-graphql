import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackLikesCreateManyTrackInput {
    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
