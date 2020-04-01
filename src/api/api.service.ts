import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

import { CreateUserEnvelope } from './models/create-user.dto';

@Injectable()
export class ApiService {
    constructor(
        private readonly config: ConfigService,
        @Inject('GraphQLClient') private readonly graphqlClient: GraphQLClient,
    ) {}

    async createUser(createUserEnvelope: CreateUserEnvelope) {
        const createUserData = {
            name: createUserEnvelope.user.username,
            email: createUserEnvelope.user.email,
            password: createUserEnvelope.user.password,
        };
        const endpoint = this.config.get('graphqlEndpoint');
        const query = /* GraphQL */ `
            mutation createUser($createUserData: UserCreateInput!) {
                user: createUser(data: $createUserData) {
                    email
                    username: name
                    token
                    bio
                    image
                }
            }
        `;
        return this.graphqlClient.request(query, { createUserData });
    }
}
