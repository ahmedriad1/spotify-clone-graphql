import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistUncheckedCreateNestedOneWithoutUserInput } from '../artist/artist-unchecked-create-nested-one-without-user.input';
import { TrackLikesUncheckedCreateNestedManyWithoutUserInput } from '../track-likes/track-likes-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutLikedAlbumsInput {
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

    @Field(() => TrackLikesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    likedTracks?: TrackLikesUncheckedCreateNestedManyWithoutUserInput;
}
