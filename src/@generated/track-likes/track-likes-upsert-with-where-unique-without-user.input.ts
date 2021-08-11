import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesUpdateWithoutUserInput } from './track-likes-update-without-user.input';
import { TrackLikesCreateWithoutUserInput } from './track-likes-create-without-user.input';

@InputType()
export class TrackLikesUpsertWithWhereUniqueWithoutUserInput {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;

    @Field(() => TrackLikesUpdateWithoutUserInput, {nullable:false})
    update!: TrackLikesUpdateWithoutUserInput;

    @Field(() => TrackLikesCreateWithoutUserInput, {nullable:false})
    create!: TrackLikesCreateWithoutUserInput;
}
