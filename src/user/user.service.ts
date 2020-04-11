import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserCreateInput } from '@generated/type-graphql/resolvers/inputs/UserCreateInput';
import { Injectable } from '@nestjs/common';
import { UserUpdateManyWithoutFollowedByInput, UserWhereUniqueInput } from '@prisma/client';

import { InjectPrisma } from '../prisma/prisma.module';
import { LoginFieldsModel } from './models/login-fields';
import { UserUpdateInput } from './models/user-update-input';
import { PrismaUser } from './types';
import { UserRepository } from './user.repository';

/**
 * Service to manage users.
 */
@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        @InjectPrisma('user') private readonly prismaUser: PrismaUser,
    ) {}

    async update(where: UserWhereUniqueInput, data: UserUpdateInput) {
        return this.prismaUser.update({ data, where });
    }

    async findOne(where: UserWhereUniqueInput) {
        return this.prismaUser.findOne({ where });
    }

    async findOneByCredentials(data: LoginFieldsModel) {
        let user = await this.prismaUser.findOne({ where: { email: data.email } });
        if (!(user && user.password === data.password)) {
            user = null;
        }
        return user;
    }

    async findOneRandom() {
        return this.userRepository.randomUser();
    }

    async findMany(args: FindManyUserArgs) {
        return this.prismaUser.findMany(args);
    }

    async create(data: UserCreateInput) {
        // TODO: hash password
        // TODO: check email unique, throw 409
        return this.prismaUser.create({ data });
    }

    async isFollowing(userId: string, byUserId: string) {
        const result = await this.prismaUser
            .findOne({ where: { id: userId } })
            .followers({ where: { id: byUserId }, first: 1 });
        return result.length > 0;
    }

    /**
     * Add or remove follower for user matching to `where` conditions.
     */
    async follow(where: UserWhereUniqueInput, follower: UserWhereUniqueInput, value: boolean) {
        const followersOperation: UserUpdateManyWithoutFollowedByInput = value
            ? { connect: follower }
            : { disconnect: follower };
        return this.prismaUser.update({
            where,
            data: {
                followers: followersOperation,
            },
        });
    }
}
