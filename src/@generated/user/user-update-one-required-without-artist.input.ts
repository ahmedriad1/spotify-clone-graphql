import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutArtistInput } from './user-create-without-artist.input';
import { UserCreateOrConnectWithoutArtistInput } from './user-create-or-connect-without-artist.input';
import { UserUpsertWithoutArtistInput } from './user-upsert-without-artist.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutArtistInput } from './user-update-without-artist.input';

@InputType()
export class UserUpdateOneRequiredWithoutArtistInput {
    @Field(() => UserCreateWithoutArtistInput, {nullable:true})
    create?: UserCreateWithoutArtistInput;

    @Field(() => UserCreateOrConnectWithoutArtistInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutArtistInput;

    @Field(() => UserUpsertWithoutArtistInput, {nullable:true})
    upsert?: UserUpsertWithoutArtistInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutArtistInput, {nullable:true})
    update?: UserUpdateWithoutArtistInput;
}
