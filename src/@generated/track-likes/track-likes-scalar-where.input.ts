import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TrackLikesScalarWhereInput {
    @Field(() => [TrackLikesScalarWhereInput], {nullable:true})
    AND?: Array<TrackLikesScalarWhereInput>;

    @Field(() => [TrackLikesScalarWhereInput], {nullable:true})
    OR?: Array<TrackLikesScalarWhereInput>;

    @Field(() => [TrackLikesScalarWhereInput], {nullable:true})
    NOT?: Array<TrackLikesScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    trackId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    likedAt?: DateTimeFilter;
}
