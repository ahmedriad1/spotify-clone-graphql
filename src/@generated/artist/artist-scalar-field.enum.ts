import { registerEnumType } from '@nestjs/graphql';

export enum ArtistScalarFieldEnum {
    id = "id",
    name = "name",
    imageId = "imageId",
    userId = "userId"
}

registerEnumType(ArtistScalarFieldEnum, { name: 'ArtistScalarFieldEnum' })
