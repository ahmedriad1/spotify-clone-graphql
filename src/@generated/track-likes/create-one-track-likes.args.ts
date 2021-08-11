import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesCreateInput } from './track-likes-create.input';

@ArgsType()
export class CreateOneTrackLikesArgs {
    @Field(() => TrackLikesCreateInput, {nullable:false})
    data!: TrackLikesCreateInput;
}
