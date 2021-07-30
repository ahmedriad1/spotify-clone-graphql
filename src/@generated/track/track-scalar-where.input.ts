import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TrackScalarWhereInput {
    @Field(() => [TrackScalarWhereInput], {nullable:true})
    AND?: Array<TrackScalarWhereInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    OR?: Array<TrackScalarWhereInput>;

    @Field(() => [TrackScalarWhereInput], {nullable:true})
    NOT?: Array<TrackScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    duration?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    trackId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    genreId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    albumId?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likesCount?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
