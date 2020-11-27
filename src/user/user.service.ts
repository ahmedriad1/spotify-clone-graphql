import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { UserRepository } from './user.repository';

/**
 * Service to manage users.
 */
@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository) {}

    async update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
        return this.repository.update({ data, where });
    }

    async findOne(where: Prisma.UserWhereUniqueInput) {
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

    async findMany(args: Prisma.FindManyUserArgs) {
        return this.repository.findMany(args);
    }

    async create(data: Prisma.UserCreateInput) {
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
    async follow(
        where: Prisma.UserWhereUniqueInput,
        follower: Prisma.UserWhereUniqueInput,
        value: boolean,
    ) {
        const followersOperation: Prisma.UserUpdateManyWithoutFollowingInput = value
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
