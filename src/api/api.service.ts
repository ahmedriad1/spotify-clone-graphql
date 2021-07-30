/* eslint-disable max-lines */
import { Inject, Injectable } from '@nestjs/common';
// import { Prisma } from '@prisma/client';
import { GraphQLClient } from 'graphql-request';

import { userFields } from './fragments';

import { CreateUserDto } from './models/create-user.dto';
import { LoginUserDto } from './models/login-user.dto';
import { UpdateUserDto } from './models/update-user.dto';

/**
 * Service for sending graphql requests to graphql endpoint
 * and return to api controller.
 */
@Injectable()
export class ApiService {
    constructor(
        @Inject('GraphQLClient') private readonly graphqlClient: GraphQLClient,
    ) {}

    /**
     * Send mutation query to create user.
     */
    async createUser(createUser: CreateUserDto) {
        const createUserData = {
            name: createUser.name,
            email: createUser.email,
            password: createUser.password,
        };
        const query = /* GraphQL */ `
            mutation createUser($createUserData: UserCreateInput!) {
                user: createUser(data: $createUserData) {
                    ...userFields
                    token
                }
            }
            ${userFields}
        `;
        return this.graphqlClient.request(query, { createUserData });
    }

    /**
     * Send mutation query for login.
     */
    async loginUser(loginUser: LoginUserDto) {
        const loginUserData = {
            email: loginUser.email,
            password: loginUser.password,
        };
        const query = /* GraphQL */ `
            mutation loginUser($data: UserLoginInput!) {
                user: loginUser(data: $data) {
                    ...userFields
                    token
                }
            }
            ${userFields}
        `;
        return this.graphqlClient.request(query, { data: loginUserData });
    }

    /**
     * Get current user, authentication required.
     */
    async getCurrentUser(token: string) {
        const query = /* GraphQL */ `
            query {
                user: me {
                    ...userFields
                    token
                }
            }
            ${userFields}
        `;
        return this.graphqlClient
            .setHeader('Authorization', `Bearer ${token}`)
            .request(query);
    }

    /**
     * Get current user, authentication required.
     */
    async updateUser({ token, user }: { token: string; user: UpdateUserDto }) {
        const query = /* GraphQL */ `
            mutation updateUser($data: UserUpdateInput!) {
                user: updateUser(data: $data) {
                    ...userFields
                    token
                }
            }
            ${userFields}
        `;
        return this.graphqlClient
            .setHeader('Authorization', `Bearer ${token}`)
            .request(query, { data: user });
    }

    /**
     * Get current user.
     * Authorization optional, if yes `following` property should be checked.
     */
    async getProfile({ token, name }: { token: string; name: string }) {
        const query = /* GraphQL */ `
            query user($input: UserWhereUniqueInput!) {
                profile: user(where: $input) {
                    ...userFields
                    following: isFollowing
                }
            }
            ${userFields}
        `;
        return this.graphqlClient
            .setHeader('Authorization', `Bearer ${token}`)
            .request(query, {
                input: { name },
            });
    }
}
