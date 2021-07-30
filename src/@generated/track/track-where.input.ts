import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { GenreRelationFilter } from '../genre/genre-relation-filter.input';
import { AlbumRelationFilter } from '../album/album-relation-filter.input';
import { ArtistListRelationFilter } from '../artist/artist-list-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TrackWhereInput {
    @Field(() => [TrackWhereInput], {nullable:true})
    AND?: Array<TrackWhereInput>;

    @Field(() => [TrackWhereInput], {nullable:true})
    OR?: Array<TrackWhereInput>;

    @Field(() => [TrackWhereInput], {nullable:true})
    NOT?: Array<TrackWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    duration?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    trackId?: StringFilter;

    @Field(() => GenreRelationFilter, {nullable:true})
    genre?: GenreRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    genreId?: StringFilter;

    @Field(() => AlbumRelationFilter, {nullable:true})
    album?: AlbumRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    albumId?: StringFilter;

    @Field(() => ArtistListRelationFilter, {nullable:true})
    artists?: ArtistListRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    likesCount?: IntFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    likedBy?: UserListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
