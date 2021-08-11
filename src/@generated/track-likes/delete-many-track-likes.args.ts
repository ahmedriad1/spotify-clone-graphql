import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesWhereInput } from './track-likes-where.input';

@ArgsType()
export class DeleteManyTrackLikesArgs {
    @Field(() => TrackLikesWhereInput, {nullable:true})
    where?: TrackLikesWhereInput;
}
