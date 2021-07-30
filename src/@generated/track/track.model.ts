import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Genre } from '../genre/genre.model';
import { Album } from '../album/album.model';
import { Artist } from '../artist/artist.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { TrackCount } from './track-count.output';

@ObjectType()
export class Track {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => Float, {nullable:false})
    duration!: number;
    @Field(() => String, {nullable:false})
    trackId!: string;
    @Field(() => Genre, {nullable:false})
    genre!: Genre;
    @Field(() => String, {nullable:false})
    genreId!: string;
    @Field(() => Album, {nullable:false})
    album!: Album;
    @Field(() => String, {nullable:false})
    albumId!: string;
    @Field(() => [Artist], {nullable:true})
    artists!: Array<Artist>;
    @Field(() => Int, {nullable:false,defaultValue:0})
    likesCount!: number;
    @Field(() => [User], {nullable:true})
    likedBy!: Array<User>;
    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => TrackCount, {nullable:true})
    _count!: TrackCount;
}
