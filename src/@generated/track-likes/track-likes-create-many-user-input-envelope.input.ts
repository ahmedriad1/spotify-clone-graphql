import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesCreateManyUserInput } from './track-likes-create-many-user.input';

@InputType()
export class TrackLikesCreateManyUserInputEnvelope {
    @Field(() => [TrackLikesCreateManyUserInput], {nullable:false})
    data!: Array<TrackLikesCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
