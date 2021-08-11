import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesUpdateManyMutationInput } from './track-likes-update-many-mutation.input';
import { TrackLikesWhereInput } from './track-likes-where.input';

@ArgsType()
export class UpdateManyTrackLikesArgs {
    @Field(() => TrackLikesUpdateManyMutationInput, {nullable:false})
    data!: TrackLikesUpdateManyMutationInput;

    @Field(() => TrackLikesWhereInput, {nullable:true})
    where?: TrackLikesWhereInput;
}
