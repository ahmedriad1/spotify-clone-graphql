import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesUpdateManyMutationInput } from './album-likes-update-many-mutation.input';
import { AlbumLikesWhereInput } from './album-likes-where.input';

@ArgsType()
export class UpdateManyAlbumLikesArgs {
    @Field(() => AlbumLikesUpdateManyMutationInput, {nullable:false})
    data!: AlbumLikesUpdateManyMutationInput;

    @Field(() => AlbumLikesWhereInput, {nullable:true})
    where?: AlbumLikesWhereInput;
}
