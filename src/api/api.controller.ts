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
        return undefined;
    }

    @Get('user')
    async user() {
        return undefined;
    }

    @Put('user')
    async updateUser() {
        return undefined;
    }

    @Get('profiles/:username')
    async profilesUsername(@Param('username') username: string) {
        return undefined;
    }

    @Post('profiles/:username/follow')
    async createProfilesUsernameFollow() {
        return undefined;
    }

    @Delete('profiles/:username/follow')
    async deleteProfilesUsernameFollow() {
        return undefined;
    }

    @Get('articles')
    async getArticles() {
        return undefined;
    }

    @Get('articles/feed')
    async articlesFeed() {
        return undefined;
    }

    @Get('articles/:slug')
    async articlesSlug() {
        return undefined;
    }

    @Post('articles')
    async createArticle() {
        return undefined;
    }

    @Put('articles/:slug')
    async update_article() {
        return undefined;
    }

    @Delete('articles/:slug')
    async deleteArticle() {
        return undefined;
    }

    @Post('articles/:slug/comments')
    async createArticlesSlugComments() {
        return undefined;
    }

    @Get('articles/:slug/comments')
    async articlesSlugComments() {
        return undefined;
    }

    @Delete('articles/:slug/comments/:id')
    async articlesSlugCommentsId() {
        return undefined;
    }

    @Post('articles/:slug/favorite')
    async createArticlesSlugFavorite() {
        return undefined;
    }

    @Delete('articles/:slug/favorite')
    async deleteArticlesSlugFavorite() {
        return undefined;
    }

    @Get('tags')
    async tags() {
        return undefined;
    }
}
