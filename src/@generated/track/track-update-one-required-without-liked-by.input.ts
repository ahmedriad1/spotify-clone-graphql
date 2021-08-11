import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutLikedByInput } from './track-create-without-liked-by.input';
import { TrackCreateOrConnectWithoutLikedByInput } from './track-create-or-connect-without-liked-by.input';
import { TrackUpsertWithoutLikedByInput } from './track-upsert-without-liked-by.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';
import { TrackUpdateWithoutLikedByInput } from './track-update-without-liked-by.input';

@InputType()
export class TrackUpdateOneRequiredWithoutLikedByInput {
    @Field(() => TrackCreateWithoutLikedByInput, {nullable:true})
    create?: TrackCreateWithoutLikedByInput;

    @Field(() => TrackCreateOrConnectWithoutLikedByInput, {nullable:true})
    connectOrCreate?: TrackCreateOrConnectWithoutLikedByInput;

    @Field(() => TrackUpsertWithoutLikedByInput, {nullable:true})
    upsert?: TrackUpsertWithoutLikedByInput;

    @Field(() => TrackWhereUniqueInput, {nullable:true})
    connect?: TrackWhereUniqueInput;

    @Field(() => TrackUpdateWithoutLikedByInput, {nullable:true})
    update?: TrackUpdateWithoutLikedByInput;
}
