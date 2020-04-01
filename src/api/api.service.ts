import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { request } from 'graphql-request';

import { CreateUserDto } from './models/create-user.dto';

@Injectable()
export class ApiService {
    constructor(private readonly config: ConfigService) {}

    async createUser(createUserDto: CreateUserDto) {
        const createUserData = {
            name: createUserDto.username,
            email: createUserDto.email,
            password: createUserDto.password,
        };
        const endpoint = this.config.get('graphqlEndpoint');
        const query = /* GraphQL */ `
            mutation createUser($createUserData: UserCreateInput!) {
                user: createUser(data: $createUserData) {
                    email
                    name
                    bio
                    image
                }
            }
        `;
        return request(endpoint, query, { createUserData });
    }
}
