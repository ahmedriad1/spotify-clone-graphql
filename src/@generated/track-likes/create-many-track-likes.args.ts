import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TrackLikesCreateManyInput } from './track-likes-create-many.input';

@ArgsType()
export class CreateManyTrackLikesArgs {
    @Field(() => [TrackLikesCreateManyInput], {nullable:false})
    data!: Array<TrackLikesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
