import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesUpdateInput } from './album-likes-update.input';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';

@ArgsType()
export class UpdateOneAlbumLikesArgs {
    @Field(() => AlbumLikesUpdateInput, {nullable:false})
    data!: AlbumLikesUpdateInput;

    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;
}
