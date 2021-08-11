import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlbumLikesWhereUniqueInput } from './album-likes-where-unique.input';

@ArgsType()
export class DeleteOneAlbumLikesArgs {
    @Field(() => AlbumLikesWhereUniqueInput, {nullable:false})
    where!: AlbumLikesWhereUniqueInput;
}
