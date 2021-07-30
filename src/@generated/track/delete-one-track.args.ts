import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@ArgsType()
export class DeleteOneTrackArgs {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;
}
