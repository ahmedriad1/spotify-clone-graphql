import { InjectRepository, PrismaRepository } from '@app_modules/prisma';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

/**
 * Service to manage users.
 */
@Injectable()
export class GenreService {
    findMany = this.repository.findMany;
    findUnique = this.repository.findUnique;
    update = this.repository.update;
    count = this.repository.count;

    constructor(
        @InjectRepository('genre')
        private readonly repository: PrismaRepository['genre'],
    ) {}

    async createGenre(data: Prisma.GenreCreateInput) {
        return this.repository.create({ data });
    }
}
