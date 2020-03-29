import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { User } from './models/user';
import { UserCreateInput } from './models/user-create-input';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => User)
    async createUser(@Args('data') data: UserCreateInput) {
        return this.userService.create(data);
    }
}
