import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AlbumLikesAlbumIdUserIdCompoundUniqueInput } from '../prisma/album-likes-album-id-user-id-compound-unique.input';

@InputType()
export class AlbumLikesWhereUniqueInput {
    @Field(() => AlbumLikesAlbumIdUserIdCompoundUniqueInput, {nullable:true})
    albumId_userId?: AlbumLikesAlbumIdUserIdCompoundUniqueInput;
}
