import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesWhereInput } from './track-likes-where.input';
import { TrackLikesOrderByInput } from './track-likes-order-by.input';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrackLikesScalarFieldEnum } from './track-likes-scalar-field.enum';

@ArgsType()
export class FindFirstTrackLikesArgs {
    @Field(() => TrackLikesWhereInput, {nullable:true})
    where?: TrackLikesWhereInput;

    @Field(() => [TrackLikesOrderByInput], {nullable:true})
    orderBy?: Array<TrackLikesOrderByInput>;

    @Field(() => TrackLikesWhereUniqueInput, {nullable:true})
    cursor?: TrackLikesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TrackLikesScalarFieldEnum], {nullable:true})
    distinct?: Array<TrackLikesScalarFieldEnum>;
}
