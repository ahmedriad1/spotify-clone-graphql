import { registerEnumType } from '@nestjs/graphql';

export enum AlbumScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    type = "type",
    imageId = "imageId",
    genreId = "genreId",
    likesCount = "likesCount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(AlbumScalarFieldEnum, { name: 'AlbumScalarFieldEnum' })
