import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';

@InputType()
export class TrackRelationFilter {
    @Field(() => TrackWhereInput, {nullable:true})
    is?: TrackWhereInput;

    @Field(() => TrackWhereInput, {nullable:true})
    isNot?: TrackWhereInput;
}
