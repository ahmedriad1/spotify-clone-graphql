import { Args, Context, Mutation, Parent, ResolveProperty, Resolver } from '@nestjs/graphql';

import { AuthService } from '../auth/auth.service';
import { GraphQLContext } from '../types';
import { User } from './models/user';
import { UserCreateInput } from './models/user-create-input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
    ) {}

    @Mutation(() => User)
    async createUser(@Args('data') data: UserCreateInput, @Context() context: GraphQLContext) {
        const user = await this.userService.create(data);
        ({ accessToken: context.token } = await this.authService.session(user));
        return user;
    }

    @ResolveProperty(() => String, { nullable: true })
    password(@Parent() user: User) {
        return null;
    }

    @ResolveProperty(() => String, { nullable: true })
    async token(@Parent() user: User, @Context() context: GraphQLContext) {
        return context.token;
    }
}
