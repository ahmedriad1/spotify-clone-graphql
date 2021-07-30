import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutArtistInput } from '../user/user-update-one-required-without-artist.input';
import { AlbumUpdateManyWithoutArtistsInput } from '../album/album-update-many-without-artists.input';

@InputType()
export class ArtistUpdateWithoutTracksInput {
    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    imageId?: string;

    @Field(() => UserUpdateOneRequiredWithoutArtistInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutArtistInput;

    @Field(() => AlbumUpdateManyWithoutArtistsInput, {nullable:true})
    albums?: AlbumUpdateManyWithoutArtistsInput;
}
