import { Injectable } from '@nestjs/common';

import { InjectRepository, PrismaRepository } from '../prisma';

/**
 * Service for manage tags.
 */
@Injectable()
export class TagService {
    findMany = this.repository.findMany;

    constructor(
        @InjectRepository('tag') private readonly repository: PrismaRepository['tag'],
    ) {}

    /**
     * Create tags (if not exists) from array of strings.
     */
    async createTags(tags: string[]) {
        const upsertOperations = tags.map(name => {
            return this.repository.upsert({
                where: { name },
                create: { name },
                update: {},
            });
        });
        return Promise.all(upsertOperations);
    }
}
