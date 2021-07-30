import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistCreateWithoutUserInput } from './artist-create-without-user.input';
import { ArtistCreateOrConnectWithoutUserInput } from './artist-create-or-connect-without-user.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';

@InputType()
export class ArtistUncheckedCreateNestedOneWithoutUserInput {
    @Field(() => ArtistCreateWithoutUserInput, {nullable:true})
    create?: ArtistCreateWithoutUserInput;

    @Field(() => ArtistCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: ArtistCreateOrConnectWithoutUserInput;

    @Field(() => ArtistWhereUniqueInput, {nullable:true})
    connect?: ArtistWhereUniqueInput;
}
