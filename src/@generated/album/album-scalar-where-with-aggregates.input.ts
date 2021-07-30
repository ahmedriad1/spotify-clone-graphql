import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumAlbumTypeWithAggregatesFilter } from '../prisma/enum-album-type-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AlbumScalarWhereWithAggregatesInput {
    @Field(() => [AlbumScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AlbumScalarWhereWithAggregatesInput>;

    @Field(() => [AlbumScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AlbumScalarWhereWithAggregatesInput>;

    @Field(() => [AlbumScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AlbumScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => EnumAlbumTypeWithAggregatesFilter, {nullable:true})
    type?: EnumAlbumTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    imageId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    genreId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    likesCount?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
