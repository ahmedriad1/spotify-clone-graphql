import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';
import { AlbumLikesCreateInput } from './album-likes-create.input';
import { AlbumLikesUpdateInput } from './album-likes-update.input';

@ArgsType()
export class UpsertOneAlbumLikesArgs {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;

    @Field(() => AlbumLikesCreateInput, {nullable:false})
    create!: AlbumLikesCreateInput;

    @Field(() => AlbumLikesUpdateInput, {nullable:false})
    update!: AlbumLikesUpdateInput;
}
