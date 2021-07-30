import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';

@InputType()
export class TrackListRelationFilter {
    @Field(() => TrackWhereInput, {nullable:true})
    every?: TrackWhereInput;

    @Field(() => TrackWhereInput, {nullable:true})
    some?: TrackWhereInput;

    @Field(() => TrackWhereInput, {nullable:true})
    none?: TrackWhereInput;
}
