import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TrackLikesUncheckedCreateNestedManyWithoutTrackInput } from '../track-likes/track-likes-unchecked-create-nested-many-without-track.input';

@InputType()
export class TrackUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:false})
    trackId!: string;

    @Field(() => String, {nullable:false})
    genreId!: string;

    @Field(() => String, {nullable:false})
    albumId!: string;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => TrackLikesUncheckedCreateNestedManyWithoutTrackInput, {nullable:true})
    likedBy?: TrackLikesUncheckedCreateNestedManyWithoutTrackInput;
}
