import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackCreateWithoutLikedByInput } from './track-create-without-liked-by.input';

@InputType()
export class TrackCreateOrConnectWithoutLikedByInput {
    @Field(() => TrackWhereUniqueInput, {nullable:false})
    where!: TrackWhereUniqueInput;

    @Field(() => TrackCreateWithoutLikedByInput, {nullable:false})
    create!: TrackCreateWithoutLikedByInput;
}
