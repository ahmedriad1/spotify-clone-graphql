import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AlbumLikesScalarWhereInput {
    @Field(() => [AlbumLikesScalarWhereInput], {nullable:true})
    AND?: Array<AlbumLikesScalarWhereInput>;

    @Field(() => [AlbumLikesScalarWhereInput], {nullable:true})
    OR?: Array<AlbumLikesScalarWhereInput>;

    @Field(() => [AlbumLikesScalarWhereInput], {nullable:true})
    NOT?: Array<AlbumLikesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    albumId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    likedAt?: DateTimeFilter;
}
