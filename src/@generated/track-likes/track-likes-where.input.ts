import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackRelationFilter } from '../track/track-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class TrackLikesWhereInput {
    @Field(() => [TrackLikesWhereInput], {nullable:true})
    AND?: Array<TrackLikesWhereInput>;

    @Field(() => [TrackLikesWhereInput], {nullable:true})
    OR?: Array<TrackLikesWhereInput>;

    @Field(() => [TrackLikesWhereInput], {nullable:true})
    NOT?: Array<TrackLikesWhereInput>;

    @Field(() => TrackRelationFilter, {nullable:true})
    track?: TrackRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    trackId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    likedAt?: DateTimeFilter;
}
