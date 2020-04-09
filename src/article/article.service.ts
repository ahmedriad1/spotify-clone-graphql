import { FindManyArticleArgs } from '@generated/type-graphql/resolvers/crud/Article/args/FindManyArticleArgs';
import { Injectable } from '@nestjs/common';
import { ArticleCreateInput as ArticleCreateInputData, ArticleInclude } from '@prisma/client';

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

    async findMany({ args, include }: { args: FindManyArticleArgs; include?: ArticleInclude }) {
        return this.prisma.article.findMany({
            ...args,
            include,
        });
    }

    // async update(where: UserWhereUniqueInput, data: UserUpdateInput) {
    //     return this.prisma.article.update({ data, where });
    // }

    // async findOne(where: UserWhereUniqueInput) {
    //     return this.prisma.article.findOne({ where });
    // }

    // async findOneByCredentials(data: LoginFieldsModel) {
    //     let user = await this.prisma.article.findOne({ where: { email: data.email } });
    //     if (!(user && user.password === data.password)) {
    //         user = null;
    //     }
    //     return user;
    // }

    // async findOneRandom() {
    //     return this.userRepository.randomUser();
    // }

    // async isFollowing(userId: string, byUserId: string) {
    //     const result = await this.prisma.article
    //         .findOne({ where: { id: userId } })
    //         .followers({ where: { id: byUserId }, first: 1 });
    //     return result.length > 0;
    // }
}
