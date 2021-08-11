import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ArtistRelationFilter } from '../artist/artist-relation-filter.input';
import { TrackLikesListRelationFilter } from '../track-likes/track-likes-list-relation-filter.input';
import { AlbumLikesListRelationFilter } from '../album-likes/album-likes-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => ArtistRelationFilter, {nullable:true})
    artist?: ArtistRelationFilter;

    @Field(() => TrackLikesListRelationFilter, {nullable:true})
    likedTracks?: TrackLikesListRelationFilter;

    @Field(() => AlbumLikesListRelationFilter, {nullable:true})
    likedAlbums?: AlbumLikesListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
