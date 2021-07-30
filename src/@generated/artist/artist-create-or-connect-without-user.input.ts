import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistWhereUniqueInput } from './artist-where-unique.input';
import { ArtistCreateWithoutUserInput } from './artist-create-without-user.input';

@InputType()
export class ArtistCreateOrConnectWithoutUserInput {
    @Field(() => ArtistWhereUniqueInput, {nullable:false})
    where!: ArtistWhereUniqueInput;

    @Field(() => ArtistCreateWithoutUserInput, {nullable:false})
    create!: ArtistCreateWithoutUserInput;
}
