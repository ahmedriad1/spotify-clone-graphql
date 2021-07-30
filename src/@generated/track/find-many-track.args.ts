import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';
import { TrackOrderByInput } from './track-order-by.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TrackScalarFieldEnum } from './track-scalar-field.enum';

@ArgsType()
export class FindManyTrackArgs {
    @Field(() => TrackWhereInput, {nullable:true})
    where?: TrackWhereInput;

    @Field(() => [TrackOrderByInput], {nullable:true})
    orderBy?: Array<TrackOrderByInput>;

    @Field(() => TrackWhereUniqueInput, {nullable:true})
    cursor?: TrackWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TrackScalarFieldEnum], {nullable:true})
    distinct?: Array<TrackScalarFieldEnum>;
}
