import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesUncheckedUpdateWithoutUserInput {
    @Field(() => String, {nullable:true})
    albumId?: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
