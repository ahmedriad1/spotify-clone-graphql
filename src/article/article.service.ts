import { Injectable } from '@nestjs/common';
import { ArticleCreateInput as ArticleCreateInputData, ArticleWhereInput } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { ArticleCreateInput } from './models/article-create.input';
import { SlugService } from './slug/slug.service';

/**
 * Service to manage articles.
 */
@Injectable()
export class ArticleService {
    update = this.prisma.article.update;
    delete = this.prisma.article.delete;
    findOne = this.prisma.article.findOne;
    findMany = this.prisma.article.findMany;

    constructor(
        private readonly prisma: PrismaService,
        private readonly slug: SlugService,
        private readonly tag: TagService,
    ) {}

    /**
     * Create article from input, user.
     */
    async create({ input, author }: { input: ArticleCreateInput; author: { id: string } }) {
        const tags = await this.tag.createTags(input.tags || []);
        const isSlugUnique = async (slug: string) => {
            const entity = await this.prisma.article.findOne({ where: { slug } });
            return entity === null;
        };
        const data: ArticleCreateInputData = {
            slug: await this.slug.generate(input.title, isSlugUnique),
            title: input.title,
            body: input.body,
            description: input.description,
            author: {
                connect: {
                    id: author.id,
                },
            },
            tags: {
                connect: tags.map((tag) => ({ id: tag.id })),
            },
        };
        return this.prisma.article.create({
            data,
            include: {
                author: true,
                tags: true,
            },
        });
    }

    /**
     * Get count article by condition.
     */
    async count(where: ArticleWhereInput) {
        return this.prisma.article.count({ where });
    }

    /**
     * Checks if article favorited by user.
     */
    async isFavorited(id: string, userId: string) {
        const count = await this.prisma.article.count({
            first: 1,
            where: { id, favoritedBy: { some: { id: { equals: userId } } } },
        });
        return count > 0;
    }
}
