import { registerEnumType } from '@nestjs/graphql';

export enum UserDistinctFieldEnum {
    userId = 'userId',
    email = 'email',
    name = 'name',
    password = 'password',
    bio = 'bio',
    image = 'image',
}

registerEnumType(UserDistinctFieldEnum, { name: 'UserDistinctFieldEnum' });
