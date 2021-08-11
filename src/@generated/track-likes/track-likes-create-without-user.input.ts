import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateNestedOneWithoutLikedByInput } from '../track/track-create-nested-one-without-liked-by.input';

@InputType()
export class TrackLikesCreateWithoutUserInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => TrackCreateNestedOneWithoutLikedByInput, {nullable:false})
    track!: TrackCreateNestedOneWithoutLikedByInput;
}
