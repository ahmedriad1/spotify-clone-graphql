import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    name = "name",
    email = "email",
    password = "password",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}

registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum' })
