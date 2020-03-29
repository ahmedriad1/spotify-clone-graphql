import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

/**
 * This is REST API wrapper around graphql.
 * Backend API spec https://github.com/gothinkster/realworld/tree/master/api
 */
@Controller('api')
export class ApiController {
    /**
     * Authentication.
     */
    @Post('users/login')
    async postUsersLogin() {
        return null;
    }
    /**
     * Registration.
     */
    @Post('users')
    async postUsers() {
        return null;
    }
    @Get('user')
    async user() {
        return null;
    }
    @Put('user')
    async updateUser() {
        return null;
    }
    @Get('profiles/:username')
    async profilesUsername(@Param('username') username: string) {
        return null;
    }
    @Post('profiles/:username/follow')
    async createProfilesUsernameFollow() {
        return null;
    }
    @Delete('profiles/:username/follow')
    async deleteProfilesUsernameFollow() {
        return null;
    }
    @Get('articles')
    async getArticles() {
        return null;
    }
    @Get('articles/feed')
    async articlesFeed() {
        return null;
    }
    @Get('articles/:slug')
    async articlesSlug() {
        return null;
    }
    @Post('articles')
    async createArticle() {
        return null;
    }
    @Put('articles/:slug')
    async update_article() {
        return null;
    }
    @Delete('articles/:slug')
    async deleteArticle() {
        return null;
    }
    @Post('articles/:slug/comments')
    async createArticlesSlugComments() {
        return null;
    }
    @Get('articles/:slug/comments')
    async articlesSlugComments() {
        return null;
    }
    @Delete('articles/:slug/comments/:id')
    async articlesSlugCommentsId() {
        return null;
    }
    @Post('articles/:slug/favorite')
    async createArticlesSlugFavorite() {
        return null;
    }
    @Delete('articles/:slug/favorite')
    async deleteArticlesSlugFavorite() {
        return null;
    }
    @Get('tags')
    async tags() {
        return null;
    }
}
