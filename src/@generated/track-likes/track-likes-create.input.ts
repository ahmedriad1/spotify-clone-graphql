import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateNestedOneWithoutLikedByInput } from '../track/track-create-nested-one-without-liked-by.input';
import { UserCreateNestedOneWithoutLikedTracksInput } from '../user/user-create-nested-one-without-liked-tracks.input';

@InputType()
export class TrackLikesCreateInput {
    @Field(() => Date, {nullable:true})
    likedAt?: Date | string;

    @Field(() => TrackCreateNestedOneWithoutLikedByInput, {nullable:false})
    track!: TrackCreateNestedOneWithoutLikedByInput;

    @Field(() => UserCreateNestedOneWithoutLikedTracksInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLikedTracksInput;
}
