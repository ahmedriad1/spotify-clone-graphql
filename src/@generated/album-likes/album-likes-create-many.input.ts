import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesCreateManyInput {
    @Field(() => String, {nullable:false})
    albumId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
