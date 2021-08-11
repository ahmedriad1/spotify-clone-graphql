import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesUpdateManyMutationInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
