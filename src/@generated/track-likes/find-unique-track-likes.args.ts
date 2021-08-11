import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';

@ArgsType()
export class FindUniqueTrackLikesArgs {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;
}
