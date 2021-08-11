import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackUpdateWithoutLikedByInput } from './track-update-without-liked-by.input';
import { TrackCreateWithoutLikedByInput } from './track-create-without-liked-by.input';

@InputType()
export class TrackUpsertWithoutLikedByInput {
    @Field(() => TrackUpdateWithoutLikedByInput, {nullable:false})
    update!: TrackUpdateWithoutLikedByInput;

    @Field(() => TrackCreateWithoutLikedByInput, {nullable:false})
    create!: TrackCreateWithoutLikedByInput;
}
