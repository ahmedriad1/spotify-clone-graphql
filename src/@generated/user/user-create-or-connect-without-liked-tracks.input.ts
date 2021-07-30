import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLikedTracksInput } from './user-create-without-liked-tracks.input';

@InputType()
export class UserCreateOrConnectWithoutLikedTracksInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutLikedTracksInput, {nullable:false})
    create!: UserCreateWithoutLikedTracksInput;
}
