import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Track } from '../track/track.model';
import { User } from '../user/user.model';

@ObjectType()
export class TrackLikes {
    @Field(() => Track, {nullable:false})
    track!: Track;

    @Field(() => String, {nullable:false})
    trackId!: string;

    @Field(() => User, {nullable:false})
    user!: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    likedAt!: Date;
}
