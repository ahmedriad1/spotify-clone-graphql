import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserCreateInput } from '@generated/type-graphql/resolvers/inputs/UserCreateInput';
import { UserWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/UserWhereUniqueInput';
import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { LoginFieldsModel } from './models/login-fields';
import { UserUpdateInput } from './models/user-update-input';
import { UserRepository } from './user.repository';

/**
 * Service to manage users.
 */
@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly prisma: PrismaService,
    ) {}

    async update(where: UserWhereUniqueInput, data: UserUpdateInput) {
        return this.prisma.user.update({ data, where });
    }

    async findOne(where: UserWhereUniqueInput) {
        return this.prisma.user.findOne({ where });
    }

    async findOneByCredentials(data: LoginFieldsModel) {
        let user = await this.prisma.user.findOne({ where: { email: data.email } });
        if (!(user && user.password === data.password)) {
            user = null;
        }
        return user;
    }

    async findOneRandom() {
        return this.userRepository.randomUser();
    }

    async findMany(args: FindManyUserArgs) {
        return this.prisma.user.findMany(args);
    }

    async create(data: UserCreateInput) {
        // todo: hash password
        // todo: check email unique
        return this.prisma.user.create({ data });
    }

    async isFollowing(userId: string, byUserId: string) {
        const result = await this.prisma.user
            .findOne({ where: { id: userId } })
            .followers({ where: { id: byUserId }, first: 1 });
        return result.length > 0;
    }
}
