import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistUpdateWithoutUserInput } from './artist-update-without-user.input';
import { ArtistCreateWithoutUserInput } from './artist-create-without-user.input';

@InputType()
export class ArtistUpsertWithoutUserInput {
    @Field(() => ArtistUpdateWithoutUserInput, {nullable:false})
    update!: ArtistUpdateWithoutUserInput;

    @Field(() => ArtistCreateWithoutUserInput, {nullable:false})
    create!: ArtistCreateWithoutUserInput;
}
