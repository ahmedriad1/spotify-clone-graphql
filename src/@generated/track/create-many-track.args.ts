import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackCreateManyInput } from './track-create-many.input';

@ArgsType()
export class CreateManyTrackArgs {
    @Field(() => [TrackCreateManyInput], {nullable:false})
    data!: Array<TrackCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
