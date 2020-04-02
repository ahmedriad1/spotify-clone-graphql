import { FindManyUserArgs } from '@generated/type-graphql/resolvers/crud/User/args/FindManyUserArgs';
import { UserCreateInput } from '@generated/type-graphql/resolvers/inputs/UserCreateInput';
import { UserWhereUniqueInput } from '@generated/type-graphql/resolvers/inputs/UserWhereUniqueInput';
import { Injectable } from '@nestjs/common';

import { LoginFieldsModel } from '../auth/models/login-fields';
import { PrismaService } from '../prisma/prisma.service';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly prisma: PrismaService,
    ) {}

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
}
