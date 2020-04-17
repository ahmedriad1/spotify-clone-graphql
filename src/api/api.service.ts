import { Inject, Injectable } from '@nestjs/common';
import { ArticleWhereInput } from '@prisma/client';
import { GraphQLClient } from 'graphql-request';

import { ArticleCreateInput } from './models/article-create-input';
import { CreateArticleDto } from './models/create-article.dto';
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
     * Create article.
     * TODO: Make fragments for article.
     */
    async createArticle({
        token,
        createArticleDto,
    }: {
        token: string;
        createArticleDto: CreateArticleDto;
    }) {
        const query = /* GraphQL */ `
            mutation createArticle($input: ArticleCreateInput!) {
                article: createArticle(input: $input) {
                    slug
                    title
                    description
                    body
                    tags {
                        name
                    }
                    createdAt
                    updatedAt
                    favorited
                    favoritesCount
                    author {
                        username: name
                        bio
                        image
                        following
                    }
                }
            }
        `;
        const input: ArticleCreateInput = {
            body: createArticleDto.body,
            description: createArticleDto.description,
            title: createArticleDto.title,
            tags: createArticleDto.tagsList,
        };
        return this.graphqlClient
            .setHeader('Authorization', `Bearer ${token}`)
            .request(query, { input });
    }

    async getArticles(
        options: Partial<{
            token: string;
            tag: string;
            author: string;
            /**
             * Favorited by user
             */
            favorited: string;
            offset: number;
            limit: number;
        }>,
    ) {
        const where: ArticleWhereInput = {};
        if (options.tag) {
            where.tags = { some: { name: { equals: options.tag } } };
        }
        if (options.author) {
            where.author = { name: { equals: options.author } };
        }
        if (options.favorited) {
            where.favoritedBy = { some: { name: { equals: options.favorited } } };
        }
        let skip: number | null = null;
        if (options.offset && options.offset > 0) {
            skip = options.offset;
        }
        let first: number | null = null;
        if (options.limit) {
            first = options.limit;
        }

        const query = /* GraphQL */ `
            query articles($where: ArticleWhereInput!) {
                articles: articles(where: $where, orderBy: { id: desc }) {
                    slug
                    title
                    description
                    body
                    tags {
                        name
                    }
                    createdAt
                    updatedAt
                    favorited
                    favoritesCount
                    author {
                        username: name
                        bio
                        image
                        following
                    }
                }
                articlesCount: countArticles(where: $where)
            }
        `;
        return this.graphqlClient
            .setHeader('Authorization', `Bearer ${options.token}`)
            .request(query, { where, skip, first });
    }

    async followUser({
        token,
        username,
        value,
    }: {
        token: string;
        username: string;
        value: boolean;
    }) {
        const query = /* GraphQL */ `
            mutation follow($where: UserWhereInput!, value: Boolean!) {
                follow(where: $where, value: $value) {
                    username: name
                    bio
                    image
                    following
                }
            }
        `;
        return this.graphqlClient.setHeader('Authorization', `Bearer ${token}`).request(query, {
            where: { name: username },
            value: value,
        });
    }

    async getArticle({ token, slug }: { token: string; slug: string }) {
        this.graphqlClient.setHeader('Authorization', `Bearer ${token}`);
        return this.graphqlClient.request(
            /* GraphQL */ `
                query article($where: ArticleWhereUniqueInput!) {
                    article(where: $where) {
                        id
                        slug
                        title
                        description
                        body
                        tags {
                            name
                        }
                        createdAt
                        updatedAt
                        favorited
                        favoritesCount
                        author {
                            username: name
                            bio
                            image
                            following
                        }
                    }
                }
            `,
            { where: { slug } },
        );
    }

    async feedArticles({
        token,
        offset = 0,
        limit = 20,
    }: {
        token: string;
        offset?: number;
        limit?: number;
    }) {
        this.graphqlClient.setHeader('Authorization', `Bearer ${token}`);
        return this.graphqlClient.request(
            /* GraphQL */ `
                query feed($limit: Int = 20, $offset: Int = 0) {
                    feed(limit: $limit, offset: $offset) {
                        id
                        slug
                        title
                        description
                        body
                        tags {
                            name
                        }
                        createdAt
                        updatedAt
                        favorited
                        favoritesCount
                        author {
                            username: name
                            bio
                            image
                            following
                        }
                    }
                }
            `,
            { offset, limit },
        );
    }

    async updateArticle({ token, slug, data }: { token: string; slug: string; data: any }) {
        this.graphqlClient.setHeader('Authorization', `Bearer ${token}`);
        return this.graphqlClient.request(
            /* GraphQL */ `
                mutation updateArticle(
                    $where: ArticleWhereUniqueInput!
                    $data: ArticleUpdateInput!
                ) {
                    updateArticle(where: $where, data: $data) {
                        id
                        slug
                        title
                        description
                        body
                        tags {
                            name
                        }
                        createdAt
                        updatedAt
                        favorited
                        favoritesCount
                        author {
                            username: name
                            bio
                            image
                            following
                        }
                    }
                }
            `,
            { where: { slug }, data },
        );
    }

    /**
     * Returns a list of tags.
     */
    async getTags() {
        const response = await this.graphqlClient.request(/* GraphQL */ `
            query {
                tags {
                    name
                }
            }
        `);
        response.tags = response.tags.map((tag) => tag.name);
        return response;
    }
}
