import { registerEnumType } from '@nestjs/graphql';

export enum AlbumLikesScalarFieldEnum {
    albumId = "albumId",
    userId = "userId",
    likedAt = "likedAt"
}

registerEnumType(AlbumLikesScalarFieldEnum, { name: 'AlbumLikesScalarFieldEnum' })
