import { CurrentUser } from '@app_modules/current-user-decorator';
import {
    GraphqlAuthGuard,
    OptionalGraphqlAuthGuard,
} from '@app_modules/nestjs-passport-graphql-auth-guard';
import { AuthService } from '@auth/auth.service';
import { UserWhereUniqueInput } from '@generated/user/user-where-unique.input';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import {
    Args,
    Context,
    Info,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { GraphQLResolveInfo } from 'graphql';

import { GraphQLContext, PassportUserFields } from '../types';
// eslint-disable-next-line boundaries/element-types
import {
    RefreshTokenInput,
    UserCreateInput,
    UserLoginInput,
    UserUpdateInput,
} from './dto';
import { UserModel } from './models/user.model';
import { UserService } from './user.service';

@Resolver(() => UserModel)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Query(() => UserModel)
    @UseGuards(GraphqlAuthGuard)
    async me(
        @CurrentUser() user: PassportUserFields,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                User: { id: true },
            },
        }).value.select;
        return this.userService.findUnique({ select, where: { id: user.id } });
    }

    @UseGuards(OptionalGraphqlAuthGuard)
    @Query(() => UserModel)
    async user(
        @Args('where') where: UserWhereUniqueInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                User: { id: true },
            },
        }).value.select;

        return this.userService.findUnique({
            select,
            where,
            rejectOnNotFound: true,
        });
    }

    @Mutation(() => UserModel)
    async createUser(
        @Args('data') data: UserCreateInput,
        @Context() context: GraphQLContext,
    ) {
        const user = await this.userService.create(data);
        ({ accessToken: context.token, refreshToken: context.refreshToken } =
            await this.authService.session(user));
        return user;
    }

    @Mutation(() => UserModel)
    @UseGuards(GraphqlAuthGuard)
    async updateUser(
        @Args('data') data: UserUpdateInput,
        @CurrentUser() user: PassportUserFields,
    ) {
        return this.userService.update({ id: user.id }, data as Prisma.UserUpdateInput);
    }

    @Mutation(() => UserModel)
    async loginUser(
        @Args('data') data: UserLoginInput,
        @Context() context: GraphQLContext,
    ) {
        const user = await this.userService.findByCredentials(data);
        if (!user) throw new UnauthorizedException();

        ({ accessToken: context.token, refreshToken: context.refreshToken } =
            await this.authService.session(user));
        return user;
    }

    @Mutation(() => UserModel)
    async refreshAccessToken(
        @Args('data') data: RefreshTokenInput,
        @Context() context: GraphQLContext,
    ) {
        const userId = await this.authService.refreshToken(data.refreshToken);

        const user = await this.userService.findUnique({
            where: { id: userId },
        });

        if (!user) throw new UnauthorizedException('Invalid refresh token');

        ({ accessToken: context.token, refreshToken: data.refreshToken } =
            await this.authService.session(user));

        return user;
    }

    @ResolveField(() => String, { nullable: true })
    async token(@Parent() _: UserModel, @Context() context: GraphQLContext) {
        return context.token;
    }

    @ResolveField(() => String, { nullable: true })
    async refreshToken(@Parent() _: UserModel, @Context() context: GraphQLContext) {
        return context.refreshToken;
    }
}
