import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutLikedAlbumsInput } from './user-create-without-liked-albums.input';

@InputType()
export class UserCreateOrConnectWithoutLikedAlbumsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutLikedAlbumsInput, {nullable:false})
    create!: UserCreateWithoutLikedAlbumsInput;
}
