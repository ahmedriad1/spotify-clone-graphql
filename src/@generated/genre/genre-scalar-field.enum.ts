import { registerEnumType } from '@nestjs/graphql';

export enum GenreScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(GenreScalarFieldEnum, { name: 'GenreScalarFieldEnum' })
