import { Injectable } from '@nestjs/common';
import {
    Article,
    ArticleCreateInput as ArticleCreateInputData,
    ArticleInclude,
    ArticleWhereInput,
    ArticleWhereUniqueInput,
} from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { ArticleCreateInput } from './models/article-create.input';
import { SlugService } from './slug/slug.service';

/**
 * Service for managing articles.
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
     * Checks if article with {id} favorited by user {userId}.
     */
    async isFavorited(id: string, userId: string) {
        const count = await this.prisma.article.count({
            first: 1,
            where: { id, favoritedBy: { some: { id: { equals: userId } } } },
        });
        return count > 0;
    }

    feedWhereConditions(userId: string) {
        return {
            author: {
                followers: { some: { id: { equals: userId } } },
            },
        };
    }

    /**
     * Favorite or unfavorite article {article or where} by user {favoritedByUserId}.
     */
    async favorite(args: {
        article?: Article;
        where?: ArticleWhereUniqueInput;
        favoritedByUserId: string;
        value: boolean;
        include: ArticleInclude;
    }) {
        const article = args.article || (args.where && (await this.findOne({ where: args.where })));
        if (!article) {
            throw new TypeError('Expected article or where arguments');
        }
        const user = { id: args.favoritedByUserId };
        const favoritesCount = article.favoritesCount + (args.value ? +1 : -1);

        return this.update({
            data: {
                favoritedBy: args.value ? { connect: user } : { disconnect: user },
                favoritesCount,
            },
            where: { id: article.id },
            include: args.include,
        });
    }
}
