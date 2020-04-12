import { FindManyArticleArgs } from '@generated/type-graphql/resolvers/crud/Article/args/FindManyArticleArgs';
import { Injectable } from '@nestjs/common';
import {
    ArticleCreateInput as ArticleCreateInputData,
    ArticleInclude,
    ArticleWhereInput,
    FindOneArticleArgs,
} from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { ArticleCreateInput } from './models/article-create-input';
import { SlugService } from './slug/slug.service';

/**
 * Service to manage articles.
 */
@Injectable()
export class ArticleService {
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
     * Get all articles.
     */
    async findMany({ args, include }: { args: FindManyArticleArgs; include?: ArticleInclude }) {
        return this.prisma.article.findMany({
            ...args,
            include,
        });
    }

    async count(where: ArticleWhereInput) {
        return this.prisma.article.count({ where });
    }

    async findOne(args: FindOneArticleArgs) {
        return this.prisma.article.findOne(args);
    }
}
