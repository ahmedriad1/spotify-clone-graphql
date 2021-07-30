import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutArtistInput } from './user-create-without-artist.input';
import { UserCreateOrConnectWithoutArtistInput } from './user-create-or-connect-without-artist.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutArtistInput {
    @Field(() => UserCreateWithoutArtistInput, {nullable:true})
    create?: UserCreateWithoutArtistInput;

    @Field(() => UserCreateOrConnectWithoutArtistInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutArtistInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
