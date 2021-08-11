import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAlbumTypeFilter } from '../prisma/enum-album-type-filter.input';
import { GenreRelationFilter } from '../genre/genre-relation-filter.input';
import { ArtistListRelationFilter } from '../artist/artist-list-relation-filter.input';
import { TrackListRelationFilter } from '../track/track-list-relation-filter.input';
import { AlbumLikesListRelationFilter } from '../album-likes/album-likes-list-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AlbumWhereInput {
    @Field(() => [AlbumWhereInput], {nullable:true})
    AND?: Array<AlbumWhereInput>;

    @Field(() => [AlbumWhereInput], {nullable:true})
    OR?: Array<AlbumWhereInput>;

    @Field(() => [AlbumWhereInput], {nullable:true})
    NOT?: Array<AlbumWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => EnumAlbumTypeFilter, {nullable:true})
    type?: EnumAlbumTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    imageId?: StringFilter;

    @Field(() => GenreRelationFilter, {nullable:true})
    genre?: GenreRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    genreId?: StringFilter;

    @Field(() => ArtistListRelationFilter, {nullable:true})
    artists?: ArtistListRelationFilter;

    @Field(() => TrackListRelationFilter, {nullable:true})
    tracks?: TrackListRelationFilter;

    @Field(() => AlbumLikesListRelationFilter, {nullable:true})
    likedBy?: AlbumLikesListRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    likesCount?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
