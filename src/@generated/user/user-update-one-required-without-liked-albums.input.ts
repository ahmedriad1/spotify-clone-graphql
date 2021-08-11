import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLikedAlbumsInput } from './user-create-without-liked-albums.input';
import { UserCreateOrConnectWithoutLikedAlbumsInput } from './user-create-or-connect-without-liked-albums.input';
import { UserUpsertWithoutLikedAlbumsInput } from './user-upsert-without-liked-albums.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLikedAlbumsInput } from './user-update-without-liked-albums.input';

@InputType()
export class UserUpdateOneRequiredWithoutLikedAlbumsInput {
    @Field(() => UserCreateWithoutLikedAlbumsInput, {nullable:true})
    create?: UserCreateWithoutLikedAlbumsInput;

    @Field(() => UserCreateOrConnectWithoutLikedAlbumsInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput;

    @Field(() => UserUpsertWithoutLikedAlbumsInput, {nullable:true})
    upsert?: UserUpsertWithoutLikedAlbumsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLikedAlbumsInput, {nullable:true})
    update?: UserUpdateWithoutLikedAlbumsInput;
}
