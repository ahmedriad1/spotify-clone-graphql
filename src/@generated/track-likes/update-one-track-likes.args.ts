import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesUpdateInput } from './track-likes-update.input';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';

@ArgsType()
export class UpdateOneTrackLikesArgs {
    @Field(() => TrackLikesUpdateInput, {nullable:false})
    data!: TrackLikesUpdateInput;

    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;
}
