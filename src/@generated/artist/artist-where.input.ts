import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AlbumListRelationFilter } from '../album/album-list-relation-filter.input';
import { TrackListRelationFilter } from '../track/track-list-relation-filter.input';

@InputType()
export class ArtistWhereInput {
    @Field(() => [ArtistWhereInput], {nullable:true})
    AND?: Array<ArtistWhereInput>;

    @Field(() => [ArtistWhereInput], {nullable:true})
    OR?: Array<ArtistWhereInput>;

    @Field(() => [ArtistWhereInput], {nullable:true})
    NOT?: Array<ArtistWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    imageId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => AlbumListRelationFilter, {nullable:true})
    albums?: AlbumListRelationFilter;

    @Field(() => TrackListRelationFilter, {nullable:true})
    tracks?: TrackListRelationFilter;
}
