import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ArtistCreateNestedOneWithoutUserInput } from '../artist/artist-create-nested-one-without-user.input';
import { TrackCreateNestedManyWithoutLikedByInput } from '../track/track-create-nested-many-without-liked-by.input';

@InputType()
export class UserCreateWithoutLikedAlbumsInput {
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

    @Field(() => ArtistCreateNestedOneWithoutUserInput, {nullable:true})
    artist?: ArtistCreateNestedOneWithoutUserInput;

    @Field(() => TrackCreateNestedManyWithoutLikedByInput, {nullable:true})
    likedTracks?: TrackCreateNestedManyWithoutLikedByInput;
}
