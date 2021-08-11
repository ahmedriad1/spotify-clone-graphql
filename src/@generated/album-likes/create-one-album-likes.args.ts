import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesCreateInput } from './album-likes-create.input';

@ArgsType()
export class CreateOneAlbumLikesArgs {
    @Field(() => AlbumLikesCreateInput, {nullable:false})
    data!: AlbumLikesCreateInput;
}
