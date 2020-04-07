import { Injectable } from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TagService {
    constructor(private readonly prisma: PrismaService) {}

    async createTags(tags: string[]) {
        const upsertOperations = tags.map((name) => {
            return this.prisma.tag.upsert({
                where: { name },
                create: { name },
                update: {},
            });
        });
        return Promise.all(upsertOperations);
    }

    async findAll() {
        return this.prisma.tag.findMany();
    }
}
