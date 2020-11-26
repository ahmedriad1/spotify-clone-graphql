import { Injectable } from '@nestjs/common';
import { ArticleWhereUniqueInput, CommentCreateArgs, FindManyCommentArgs } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

/**
 * Service for managing article comments.
 */
@Injectable()
export class CommentService {
    update = this.prisma.comment.update;
    delete = this.prisma.comment.delete;
    findOne = this.prisma.comment.findOne;
    findMany = this.prisma.comment.findMany;

    constructor(private readonly prisma: PrismaService) {}

    async get(args: { where: ArticleWhereUniqueInput; follower?: { id: string } }) {
        const parameters: FindManyCommentArgs = {
            where: {
                Article: args.where,
                // todo: WHY? big leeters
                // article: args.where,
            },
            orderBy: { id: 'desc' },
            include: {
                author: {
                    include: args.follower
                        ? {
                              followers: {
                                  select: { id: true },
                                  where: { id: args.follower.id },
                                  take: 1,
                              },
                          }
                        : null,
                },
            },
        };
        return this.findMany(parameters);
    }

    async createComment(args: { where: ArticleWhereUniqueInput; body: string; authorId: string }) {
        const commentCreateArgs: CommentCreateArgs = {
            data: {
                body: args.body,
                author: {
                    connect: { id: args.authorId },
                },
                // todo: Fix me why upper case?
                Article: {
                    connect: args.where,
                },
                // article: {
                //     connect: args.where,
                // },
            },
            include: {
                author: true,
            },
        };
        return this.prisma.comment.create(commentCreateArgs);
    }
}
