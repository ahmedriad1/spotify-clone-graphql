import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreUpdateOneRequiredWithoutTracksInput } from '../genre/genre-update-one-required-without-tracks.input';
import { AlbumUpdateOneRequiredWithoutTracksInput } from '../album/album-update-one-required-without-tracks.input';
import { ArtistUpdateManyWithoutTracksInput } from '../artist/artist-update-many-without-tracks.input';
import { TrackLikesUpdateManyWithoutTrackInput } from '../track-likes/track-likes-update-many-without-track.input';

@InputType()
export class TrackUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    trackId?: string;

    @Field(() => Int, {nullable:true})
    likesCount?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => GenreUpdateOneRequiredWithoutTracksInput, {nullable:true})
    genre?: GenreUpdateOneRequiredWithoutTracksInput;

    @Field(() => AlbumUpdateOneRequiredWithoutTracksInput, {nullable:true})
    album?: AlbumUpdateOneRequiredWithoutTracksInput;

    @Field(() => ArtistUpdateManyWithoutTracksInput, {nullable:true})
    artists?: ArtistUpdateManyWithoutTracksInput;

    @Field(() => TrackLikesUpdateManyWithoutTrackInput, {nullable:true})
    likedBy?: TrackLikesUpdateManyWithoutTrackInput;
}
