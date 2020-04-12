import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { PrismaRepository } from '../prisma/prisma.repository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserRepository extends PrismaRepository {
    update = this.prisma.user.update;
    findOne = this.prisma.user.findOne;
    findMany = this.prisma.user.findMany;
    create = this.prisma.user.create;

    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async randomUser() {
        const [result] = await this.prisma.raw<User[]>(
            `SELECT * FROM "User" ORDER BY random() LIMIT 1`,
        );
        return result;
    }
}
