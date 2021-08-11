import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutLikedTracksInput } from './user-update-without-liked-tracks.input';
import { UserCreateWithoutLikedTracksInput } from './user-create-without-liked-tracks.input';

@InputType()
export class UserUpsertWithoutLikedTracksInput {
    @Field(() => UserUpdateWithoutLikedTracksInput, {nullable:false})
    update!: UserUpdateWithoutLikedTracksInput;

    @Field(() => UserCreateWithoutLikedTracksInput, {nullable:false})
    create!: UserCreateWithoutLikedTracksInput;
}
