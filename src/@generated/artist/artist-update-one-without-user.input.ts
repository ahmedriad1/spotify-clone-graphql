import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistCreateWithoutUserInput } from './artist-create-without-user.input';
import { ArtistCreateOrConnectWithoutUserInput } from './artist-create-or-connect-without-user.input';
import { ArtistUpsertWithoutUserInput } from './artist-upsert-without-user.input';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistUpdateWithoutUserInput } from './artist-update-without-user.input';

@InputType()
export class ArtistUpdateOneWithoutUserInput {
    @Field(() => ArtistCreateWithoutUserInput, {nullable:true})
    create?: ArtistCreateWithoutUserInput;

    @Field(() => ArtistCreateOrConnectWithoutUserInput, {nullable:true})
    connectOrCreate?: ArtistCreateOrConnectWithoutUserInput;

    @Field(() => ArtistUpsertWithoutUserInput, {nullable:true})
    upsert?: ArtistUpsertWithoutUserInput;

    @Field(() => ArtistWhereUniqueInput, {nullable:true})
    connect?: ArtistWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ArtistUpdateWithoutUserInput, {nullable:true})
    update?: ArtistUpdateWithoutUserInput;
}
