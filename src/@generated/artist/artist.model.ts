import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Album } from '../album/album.model';
import { Track } from '../track/track.model';
import { ArtistCount } from './artist-count.output';

@ObjectType()
export class Artist {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => String, {nullable:true})
    imageId!: string | null;
    @Field(() => User, {nullable:false})
    user!: User;
    @Field(() => String, {nullable:false})
    userId!: string;
    @Field(() => [Album], {nullable:true})
    albums!: Array<Album>;
    @Field(() => [Track], {nullable:true})
    tracks!: Array<Track>;
    @Field(() => ArtistCount, {nullable:true})
    _count!: ArtistCount;
}
