import { Injectable } from '@nestjs/common';
import {
    FindManyUserArgs,
    UserCreateInput,
    UserUpdateInput,
    UserUpdateManyWithoutFollowingInput,
    UserWhereUniqueInput,
} from '@prisma/client';

import { UserRepository } from './user.repository';

/**
 * Service to manage users.
 */
@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository) {}

    async update(where: UserWhereUniqueInput, data: UserUpdateInput) {
        return this.repository.update({ data, where });
    }

    async findOne(where: UserWhereUniqueInput) {
        return this.repository.findOne({ where });
    }

    async findOneByCredentials(data: { email: string; password: string }) {
        let user = await this.repository.findOne({ where: { email: data.email } });
        if (!(user && user.password === data.password)) {
            user = null;
        }
        return user;
    }

    async findOneRandom() {
        return this.repository.randomUser();
    }

    async findMany(args: FindManyUserArgs) {
        return this.repository.findMany(args);
    }

    async create(data: UserCreateInput) {
        return this.repository.create({ data });
    }

    async isFollowing(userId: string, byUserId: string) {
        const result = await this.repository
            .findOne({ where: { id: userId } })
            .followers({ where: { id: byUserId }, take: 1 });
        return result.length > 0;
    }

    /**
     * Add or remove follower for user matching to `where` conditions.
     */
    async follow(where: UserWhereUniqueInput, follower: UserWhereUniqueInput, value: boolean) {
        const followersOperation: UserUpdateManyWithoutFollowingInput = value
            ? { connect: follower }
            : { disconnect: follower };
        return this.repository.update({
            where,
            data: {
                followers: followersOperation,
            },
        });
    }
}
