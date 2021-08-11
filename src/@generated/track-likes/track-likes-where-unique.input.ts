import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TrackLikesTrackIdUserIdCompoundUniqueInput } from '../prisma/track-likes-track-id-user-id-compound-unique.input';

@InputType()
export class TrackLikesWhereUniqueInput {
    @Field(() => TrackLikesTrackIdUserIdCompoundUniqueInput, {nullable:true})
    trackId_userId?: TrackLikesTrackIdUserIdCompoundUniqueInput;
}
