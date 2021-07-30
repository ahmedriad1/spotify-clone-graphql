import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Album } from '../album/album.model';
import { Track } from '../track/track.model';
import { GenreCount } from './genre-count.output';

@ObjectType()
export class Genre {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    name!: string;
    @Field(() => [Album], {nullable:true})
    albums!: Array<Album>;
    @Field(() => [Track], {nullable:true})
    tracks!: Array<Track>;
    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;
    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => GenreCount, {nullable:true})
    _count!: GenreCount;
}
