import { InjectRepository, PrismaRepository } from '@app_modules/prisma';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
    findUnique = this.repository.findUnique;
    findMany = this.repository.findMany;

    constructor(
        @InjectRepository('user') private readonly repository: PrismaRepository['user'],
    ) {}

    async update(where: Prisma.UserWhereUniqueInput, data: Prisma.UserUpdateInput) {
        return this.repository.update({ data, where });
    }

    async findByCredentials(data: { email: string; password: string }) {
        let user = await this.repository.findUnique({
            where: { email: data.email },
        });
        if (!(user && user.password === data.password)) {
            // eslint-disable-next-line unicorn/no-null
            user = null;
        }
        return user;
    }

    async create(data: Prisma.UserCreateInput) {
        return this.repository.create({ data });
    }
}
