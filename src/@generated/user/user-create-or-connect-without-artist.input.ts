import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutArtistInput } from './user-create-without-artist.input';

@InputType()
export class UserCreateOrConnectWithoutArtistInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutArtistInput, {nullable:false})
    create!: UserCreateWithoutArtistInput;
}
