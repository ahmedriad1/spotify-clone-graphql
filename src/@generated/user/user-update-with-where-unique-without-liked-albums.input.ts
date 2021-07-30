import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLikedAlbumsInput } from './user-update-without-liked-albums.input';

@InputType()
export class UserUpdateWithWhereUniqueWithoutLikedAlbumsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLikedAlbumsInput, {nullable:false})
    data!: UserUpdateWithoutLikedAlbumsInput;
}
