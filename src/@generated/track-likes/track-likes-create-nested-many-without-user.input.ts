import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesCreateWithoutUserInput } from './track-likes-create-without-user.input';
import { TrackLikesCreateOrConnectWithoutUserInput } from './track-likes-create-or-connect-without-user.input';
import { TrackLikesCreateManyUserInputEnvelope } from './track-likes-create-many-user-input-envelope.input';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';

@InputType()
export class TrackLikesCreateNestedManyWithoutUserInput {
    @Field(() => [TrackLikesCreateWithoutUserInput], {nullable:true})
    create?: Array<TrackLikesCreateWithoutUserInput>;

    @Field(() => [TrackLikesCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<TrackLikesCreateOrConnectWithoutUserInput>;

    @Field(() => TrackLikesCreateManyUserInputEnvelope, {nullable:true})
    createMany?: TrackLikesCreateManyUserInputEnvelope;

    @Field(() => [TrackLikesWhereUniqueInput], {nullable:true})
    connect?: Array<TrackLikesWhereUniqueInput>;
}
