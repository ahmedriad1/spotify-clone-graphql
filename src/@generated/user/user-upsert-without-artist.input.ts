import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutArtistInput } from './user-update-without-artist.input';
import { UserCreateWithoutArtistInput } from './user-create-without-artist.input';

@InputType()
export class UserUpsertWithoutArtistInput {
    @Field(() => UserUpdateWithoutArtistInput, {nullable:false})
    update!: UserUpdateWithoutArtistInput;

    @Field(() => UserCreateWithoutArtistInput, {nullable:false})
    create!: UserCreateWithoutArtistInput;
}
