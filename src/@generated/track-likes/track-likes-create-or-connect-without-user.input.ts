import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesWhereUniqueInput } from './track-likes-where-unique.input';
import { TrackLikesCreateWithoutUserInput } from './track-likes-create-without-user.input';

@InputType()
export class TrackLikesCreateOrConnectWithoutUserInput {
    @Field(() => TrackLikesWhereUniqueInput, {nullable:false})
    where!: TrackLikesWhereUniqueInput;

    @Field(() => TrackLikesCreateWithoutUserInput, {nullable:false})
    create!: TrackLikesCreateWithoutUserInput;
}
