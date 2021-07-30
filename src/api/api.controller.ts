/* eslint-disable max-lines */
import { AuthorizationToken } from '@app_modules/nestjs-authorization-token';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Post,
    Put,
    Query,
    Req,
    Res,
    UseInterceptors,
} from '@nestjs/common';
import { Request } from 'express';

import { ApiService } from './api.service';
import { GraphQLResponseInterceptor } from './graphql-response.interceptor';

/**
 * This is REST API wrapper around graphql.
 * Backend API spec https://github.com/gothinkster/realworld/tree/master/api
 */
@Controller('api')
@UseInterceptors(GraphQLResponseInterceptor)
export class ApiController {
    constructor(private readonly service: ApiService) {}

    @Get('/')
    index() {
        return [
            'https://github.com/unlight/nestjs-graphql-prisma-realworld-example-app',
            'https://github.com/gothinkster/realworld/tree/master/api',
        ];
    }

    /**
     * Registration.
     */
    @Post('users')
    async createUser(@Req() request: Request) {
        const result = await this.service.createUser(request.body.user);
        const firstError = result.errors?.[0]?.extensions?.data;
        if (firstError) {
            throw firstError;
        }
        return result;
    }

    /**
     * Authentication.
     */
    @Post('users/login')
    async postUsersLogin(@Req() request: Request) {
        return this.service.loginUser(request.body.user);
    }

    /**
     * Get current user.
     */
    @Get('user')
    async user(@AuthorizationToken() token: string) {
        return this.service.getCurrentUser(token);
    }

    /**
     * Update user.
     * Authentication required.
     */
    @Put('user')
    async updateUser(@AuthorizationToken() token: string, @Req() request: Request) {
        return this.service.updateUser({
            token,
            user: request.body.user,
        });
    }
}
