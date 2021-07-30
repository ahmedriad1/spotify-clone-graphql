import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLikedTracksInput } from './user-update-without-liked-tracks.input';
import { UserCreateWithoutLikedTracksInput } from './user-create-without-liked-tracks.input';

@InputType()
export class UserUpsertWithWhereUniqueWithoutLikedTracksInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLikedTracksInput, {nullable:false})
    update!: UserUpdateWithoutLikedTracksInput;

    @Field(() => UserCreateWithoutLikedTracksInput, {nullable:false})
    create!: UserCreateWithoutLikedTracksInput;
}
