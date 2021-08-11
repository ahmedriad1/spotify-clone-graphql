import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedAlbumsInput } from './user-create-without-liked-albums.input';
import { UserCreateOrConnectWithoutLikedAlbumsInput } from './user-create-or-connect-without-liked-albums.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutLikedAlbumsInput {
    @Field(() => UserCreateWithoutLikedAlbumsInput, {nullable:true})
    create?: UserCreateWithoutLikedAlbumsInput;

    @Field(() => UserCreateOrConnectWithoutLikedAlbumsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
