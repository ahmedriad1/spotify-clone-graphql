import { Injectable } from '@nestjs/common';
import {
    CommentCreateArgs,
    FindManyCommentArgs,
    ArticleWhereUniqueInput,
    UserArgs,
} from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';

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
                article: args.where,
            },
            orderBy: { id: 'desc' },
            include: {
                author: {
                    include: args.follower
                        ? {
                              followers: {
                                  select: { id: true },
                                  where: { id: { equals: args.follower.id } },
                                  first: 1,
                              },
                          }
                        : null,
                },
            },
        };
        return this.findMany(parameters);
    }

    async createComment(where: ArticleWhereUniqueInput, body: string, authorId: string) {
        // todo: select author.following
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
