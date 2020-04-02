import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { AuthInfo, CurrentUser } from 'app_modules/current-user-decorator';
import { GraphqlAuthGuard } from 'app_modules/nestjs-passport-graphql-auth-guard';

import { AuthService } from '../auth/auth.service';
import { SessionTokenFields } from '../auth/models/session-user-fields';
import { GraphQLContext } from '../types';
import { User } from './models/user';
import { UserCreateInput } from './models/user-create-input';
import { UserLoginInput } from './models/user-login-input';
import { UserUpdateInput } from './models/user-update-input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Query(() => User)
    @UseGuards(GraphqlAuthGuard)
    async me(@AuthInfo() authInfo: SessionTokenFields, @CurrentUser() user: unknown) {
        return this.userService.findOne({ id: authInfo.sub });
    }

    @Mutation(() => User)
    async createUser(@Args('data') data: UserCreateInput, @Context() context: GraphQLContext) {
        const user = await this.userService.create(data);
        ({ accessToken: context.token } = await this.authService.session(user));
        return user;
    }

    @Mutation(() => User)
    @UseGuards(GraphqlAuthGuard)
    async updateUser(
        @Args('data') data: UserUpdateInput,
        @AuthInfo() authInfo: SessionTokenFields,
    ) {
        return this.userService.update({ id: authInfo.sub }, data);
    }

    @ResolveProperty(() => String, { nullable: true })
    password(@Parent() user: User) {
        return null;
    }

    @ResolveProperty(() => String, { nullable: true })
    async token(@Parent() user: User, @Context() context: GraphQLContext) {
        return context.token;
    }

    @Mutation(() => User)
    async loginUser(@Args('data') data: UserLoginInput, @Context() context: GraphQLContext) {
        const user = await this.userService.findOneByCredentials(data);
        if (!user) {
            throw new UnauthorizedException();
        }
        ({ accessToken: context.token } = await this.authService.session(user));
        return user;
    }
}
