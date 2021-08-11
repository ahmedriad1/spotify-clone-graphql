import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesCreateManyTrackInput } from './track-likes-create-many-track.input';

@InputType()
export class TrackLikesCreateManyTrackInputEnvelope {
    @Field(() => [TrackLikesCreateManyTrackInput], {nullable:false})
    data!: Array<TrackLikesCreateManyTrackInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
