import { Controller, Delete, Get, Param, Post, Put, Req, UseInterceptors } from '@nestjs/common';
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
    constructor(private readonly apiService: ApiService) {}

    @Get('/')
    index() {
        return 'https://github.com/gothinkster/realworld/tree/master/api';
    }

    /**
     * Registration.
     */
    @Post('users')
    async createUser(@Req() request: Request) {
        return this.apiService.createUser(request.body);
    }

    /**
     * Authentication.
     */
    @Post('users/login')
    async postUsersLogin() {
        return {};
    }

    @Get('user')
    async user() {
        return {};
    }

    @Put('user')
    async updateUser() {
        return {};
    }

    @Get('profiles/:username')
    async profilesUsername(@Param('username') username: string) {
        return {};
    }

    @Post('profiles/:username/follow')
    async createProfilesUsernameFollow() {
        return {};
    }

    @Delete('profiles/:username/follow')
    async deleteProfilesUsernameFollow() {
        return {};
    }

    @Get('articles')
    async getArticles() {
        return {};
    }

    @Get('articles/feed')
    async articlesFeed() {
        return {};
    }

    @Get('articles/:slug')
    async articlesSlug() {
        return {};
    }

    @Post('articles')
    async createArticle() {
        return {};
    }

    @Put('articles/:slug')
    async update_article() {
        return {};
    }

    @Delete('articles/:slug')
    async deleteArticle() {
        return {};
    }

    @Post('articles/:slug/comments')
    async createArticlesSlugComments() {
        return {};
    }

    @Get('articles/:slug/comments')
    async articlesSlugComments() {
        return {};
    }

    @Delete('articles/:slug/comments/:id')
    async articlesSlugCommentsId() {
        return {};
    }

    @Post('articles/:slug/favorite')
    async createArticlesSlugFavorite() {
        return {};
    }

    @Delete('articles/:slug/favorite')
    async deleteArticlesSlugFavorite() {
        return {};
    }

    @Get('tags')
    async tags() {
        return {};
    }
}
