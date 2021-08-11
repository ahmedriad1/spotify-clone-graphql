import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumRelationFilter } from '../album/album-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AlbumLikesWhereInput {
    @Field(() => [AlbumLikesWhereInput], {nullable:true})
    AND?: Array<AlbumLikesWhereInput>;

    @Field(() => [AlbumLikesWhereInput], {nullable:true})
    OR?: Array<AlbumLikesWhereInput>;

    @Field(() => [AlbumLikesWhereInput], {nullable:true})
    NOT?: Array<AlbumLikesWhereInput>;

    @Field(() => AlbumRelationFilter, {nullable:true})
    album?: AlbumRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    albumId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    likedAt?: DateTimeFilter;
}
