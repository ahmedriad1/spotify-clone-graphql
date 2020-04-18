import { Injectable } from '@nestjs/common';
import { ArticleWhereUniqueInput, CommentCreateArgs } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CommentService {
    update = this.prisma.article.update;
    delete = this.prisma.article.delete;
    findOne = this.prisma.article.findOne;
    findMany = this.prisma.article.findMany;
    constructor(private readonly prisma: PrismaService) {}

    async createComment(where: ArticleWhereUniqueInput, body: string, authorId: string) {
        const args: CommentCreateArgs = {
            data: {
                body,
                author: {
                    connect: { id: authorId },
                },
                article: {
                    connect: where,
                },
            },
            include: { author: true },
        };
        return this.prisma.comment.create(args);
    }
}
