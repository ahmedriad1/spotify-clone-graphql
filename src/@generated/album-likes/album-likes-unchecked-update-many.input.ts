import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    albumId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
