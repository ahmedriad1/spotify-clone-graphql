import { Inject, Injectable } from '@nestjs/common';
import { GraphQLClient } from 'graphql-request';

import { CreateUserDto } from './models/create-user.dto';
import { LoginUserDto } from './models/login-user.dto';
import { UpdateUserDto } from './models/update-user.dto';
import { UserEnvelope } from './models/user-envelope';

@Injectable()
export class ApiService {
    constructor(@Inject('GraphQLClient') private readonly graphqlClient: GraphQLClient) {}

    /**
     * Send mutation query to create user.
     */
    async createUser(envelope: UserEnvelope<CreateUserDto>) {
        const createUserData = {
            name: envelope.user.username,
            email: envelope.user.email,
            password: envelope.user.password,
        };
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

    /**
     * Send mutation query for login.
     */
    async loginUser(envelope: UserEnvelope<LoginUserDto>) {
        const loginUserData = {
            email: envelope.user.email,
            password: envelope.user.password,
        };
        const query = /* GraphQL */ `
            mutation loginUser($data: UserLoginInput!) {
                user: loginUser(data: $data) {
                    email
                    username: name
                    token
                    bio
                    image
                }
            }
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
                    email
                    username: name
                    token
                    bio
                    image
                }
            }
        `;
        return this.graphqlClient.setHeader('Authorization', `Bearer ${token}`).request(query);
    }

    /**
     * Get current user, authentication required.
     */
    async updateUser({ token, user }: { token: string; user: UpdateUserDto }) {
        const query = /* GraphQL */ `
            mutation updateUser($data: UserUpdateInput!) {
                user: updateUser(data: $data) {
                    email
                    username: name
                    token
                    bio
                    image
                }
            }
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
                    username: name
                    bio
                    image
                    following
                }
            }
        `;
        return this.graphqlClient.setHeader('Authorization', `Bearer ${token}`).request(query, {
            input: { name },
        });
    }

    /**
     * Returns a list of tags.
     */
    async getTags() {
        return this.graphqlClient.request(/* GraphQL */ `
            query tags {
                    id
                    name
                }
            }
        `);
    }
}
