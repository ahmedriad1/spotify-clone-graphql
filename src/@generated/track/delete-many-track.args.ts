import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereInput } from './track-where.input';

@ArgsType()
export class DeleteManyTrackArgs {
    @Field(() => TrackWhereInput, {nullable:true})
    where?: TrackWhereInput;
}
