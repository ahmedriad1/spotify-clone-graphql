import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TrackLikesUpdateManyMutationInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
