import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AlbumLikesUncheckedCreateWithoutUserInput {
    @Field(() => String, {nullable:false})
    albumId!: string;

    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;
}
