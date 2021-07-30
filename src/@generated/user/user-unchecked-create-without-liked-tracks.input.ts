import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistUncheckedCreateNestedOneWithoutUserInput } from '../artist/artist-unchecked-create-nested-one-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutLikedTracksInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ArtistUncheckedCreateNestedOneWithoutUserInput, {nullable:true})
    artist?: ArtistUncheckedCreateNestedOneWithoutUserInput;
}
