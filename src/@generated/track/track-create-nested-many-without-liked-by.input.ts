import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackCreateWithoutLikedByInput } from './track-create-without-liked-by.input';
import { TrackCreateOrConnectWithoutLikedByInput } from './track-create-or-connect-without-liked-by.input';
import { TrackWhereUniqueInput } from './track-where-unique.input';

@InputType()
export class TrackCreateNestedManyWithoutLikedByInput {
    @Field(() => [TrackCreateWithoutLikedByInput], {nullable:true})
    create?: Array<TrackCreateWithoutLikedByInput>;

    @Field(() => [TrackCreateOrConnectWithoutLikedByInput], {nullable:true})
    connectOrCreate?: Array<TrackCreateOrConnectWithoutLikedByInput>;

    @Field(() => [TrackWhereUniqueInput], {nullable:true})
    connect?: Array<TrackWhereUniqueInput>;
}
