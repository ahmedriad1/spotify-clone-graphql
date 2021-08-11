import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesWhereInput } from './album-likes-where.input';

@ArgsType()
export class DeleteManyAlbumLikesArgs {
    @Field(() => AlbumLikesWhereInput, {nullable:true})
    where?: AlbumLikesWhereInput;
}
