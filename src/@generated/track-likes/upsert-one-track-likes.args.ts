import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesCreateInput } from './track-likes-create.input';
import { TrackLikesUpdateInput } from './track-likes-update.input';

@ArgsType()
export class UpsertOneTrackLikesArgs {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;

    @Field(() => TrackLikesCreateInput, {nullable:false})
    create!: TrackLikesCreateInput;

    @Field(() => TrackLikesUpdateInput, {nullable:false})
    update!: TrackLikesUpdateInput;
}
