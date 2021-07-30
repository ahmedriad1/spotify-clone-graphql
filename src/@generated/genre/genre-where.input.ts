import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { AlbumListRelationFilter } from '../album/album-list-relation-filter.input';
import { TrackListRelationFilter } from '../track/track-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GenreWhereInput {
    @Field(() => [GenreWhereInput], {nullable:true})
    AND?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    OR?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    NOT?: Array<GenreWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => AlbumListRelationFilter, {nullable:true})
    albums?: AlbumListRelationFilter;

    @Field(() => TrackListRelationFilter, {nullable:true})
    tracks?: TrackListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
