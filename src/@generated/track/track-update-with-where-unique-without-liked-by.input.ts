import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutLikedByInput } from './track-update-without-liked-by.input';

@InputType()
export class TrackUpdateWithWhereUniqueWithoutLikedByInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutLikedByInput, {nullable:false})
    data!: TrackUpdateWithoutLikedByInput;
}
