import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Artist } from '../artist/artist.model';
import { Track } from '../track/track.model';
import { Album } from '../album/album.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:false})
    password!: string;
    @Field(() => Artist, {nullable:true})
    artist!: Artist;
    @Field(() => [Track], {nullable:true})
    likedTracks!: Array<Track>;
    @Field(() => [Album], {nullable:true})
    likedAlbums!: Array<Album>;
    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => UserCount, {nullable:true})
    _count!: UserCount;
}
