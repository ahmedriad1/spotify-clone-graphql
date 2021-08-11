import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesUpdateWithoutUserInput } from './track-likes-update-without-user.input';

@InputType()
export class TrackLikesUpdateWithWhereUniqueWithoutUserInput {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;

    @Field(() => TrackLikesUpdateWithoutUserInput, {nullable:false})
    data!: TrackLikesUpdateWithoutUserInput;
}
