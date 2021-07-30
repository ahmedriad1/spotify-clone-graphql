import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutArtistInput } from '../user/user-create-nested-one-without-artist.input';
import { TrackCreateNestedManyWithoutArtistsInput } from '../track/track-create-nested-many-without-artists.input';

@InputType()
export class ArtistCreateWithoutAlbumsInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    imageId?: string;

    @Field(() => UserCreateNestedOneWithoutArtistInput, {nullable:false})
    user!: UserCreateNestedOneWithoutArtistInput;

    @Field(() => TrackCreateNestedManyWithoutArtistsInput, {nullable:true})
    tracks?: TrackCreateNestedManyWithoutArtistsInput;
}
