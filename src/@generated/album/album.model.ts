import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { AlbumType } from '../prisma/album-type.enum';
import { Genre } from '../genre/genre.model';
import { Artist } from '../artist/artist.model';
import { Track } from '../track/track.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { AlbumCount } from './album-count.output';

@ObjectType()
export class Album {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => AlbumType, {nullable:false,defaultValue:'ALBUM'})
    type!: AlbumType;
    @Field(() => String, {nullable:true})
    imageId!: string | null;
    @Field(() => Genre, {nullable:false})
    genre!: Genre;
    @Field(() => String, {nullable:false})
    genreId!: string;
    @Field(() => [Artist], {nullable:true})
    artists!: Array<Artist>;
    @Field(() => [Track], {nullable:true})
    tracks!: Array<Track>;
    @Field(() => Int, {nullable:false,defaultValue:0})
    likesCount!: number;
    @Field(() => [User], {nullable:true})
    likedBy!: Array<User>;
    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => AlbumCount, {nullable:true})
    _count!: AlbumCount;
}
