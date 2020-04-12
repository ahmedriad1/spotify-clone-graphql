import { Test, TestingModule } from '@nestjs/testing';
import { Mock, MockFactory } from 'app_modules/jest-mock-factory';

import { PrismaRepository } from '../prisma/prisma.repository';
import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { ArticleService } from './article.service';
import { SlugService } from './slug/slug.service';

describe('ArticleService', () => {
    let service: ArticleService;
    let prisma: Mock<PrismaService>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArticleService,
                SlugService,
                TagService,
                {
                    provide: PrismaService,
                    useValue: {
                        article: MockFactory.create(PrismaRepository),
                    },
                },
            ],
        }).compile();

        service = module.get(ArticleService);
        prisma = module.get(PrismaService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('findMany', async () => {
        expect(prisma.article.findMany).toBeDefined();
        await service.findMany({ args: { where: { id: { equals: 'a' } } } });
        expect(prisma.article.findMany).toHaveBeenCalledWith(
            expect.objectContaining({
                where: {
                    id: {
                        equals: 'a',
                    },
                },
            }),
        );
    });
});
