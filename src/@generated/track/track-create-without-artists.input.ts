import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreCreateNestedOneWithoutTracksInput } from '../genre/genre-create-nested-one-without-tracks.input';
import { AlbumCreateNestedOneWithoutTracksInput } from '../album/album-create-nested-one-without-tracks.input';
import { TrackLikesCreateNestedManyWithoutTrackInput } from '../track-likes/track-likes-create-nested-many-without-track.input';

@InputType()
export class TrackCreateWithoutArtistsInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Float, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:false})
    trackId!: string;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GenreCreateNestedOneWithoutTracksInput, {nullable:false})
    genre!: GenreCreateNestedOneWithoutTracksInput;

    @Field(() => AlbumCreateNestedOneWithoutTracksInput, {nullable:false})
    album!: AlbumCreateNestedOneWithoutTracksInput;

    @Field(() => TrackLikesCreateNestedManyWithoutTrackInput, {nullable:true})
    likedBy?: TrackLikesCreateNestedManyWithoutTrackInput;
}
