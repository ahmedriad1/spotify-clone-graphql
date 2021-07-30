import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLikedTracksInput } from './user-update-without-liked-tracks.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutLikedTracksInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLikedTracksInput, {nullable:false})
    data!: UserUpdateWithoutLikedTracksInput;
}
