import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumAlbumTypeFilter } from '../prisma/enum-album-type-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AlbumScalarWhereInput {
    @Field(() => [AlbumScalarWhereInput], {nullable:true})
    AND?: Array<AlbumScalarWhereInput>;

    @Field(() => [AlbumScalarWhereInput], {nullable:true})
    OR?: Array<AlbumScalarWhereInput>;

    @Field(() => [AlbumScalarWhereInput], {nullable:true})
    NOT?: Array<AlbumScalarWhereInput>;

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

    @Field(() => StringFilter, {nullable:true})
    genreId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likesCount?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
