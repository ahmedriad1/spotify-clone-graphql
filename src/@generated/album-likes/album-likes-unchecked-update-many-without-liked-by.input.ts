import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesUncheckedUpdateManyWithoutLikedByInput {
    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
