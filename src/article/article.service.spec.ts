import { Test, TestingModule } from '@nestjs/testing';
import { createSpyObj } from 'jest-createspyobj';

import { PrismaRepository } from '../prisma/prisma.repository';
import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { ArticleService } from './article.service';
import { SlugService } from './slug/slug.service';

describe('ArticleService', () => {
    let service: ArticleService;
    let prismaService: jest.Mocked<PrismaService>;
    let testingModule: TestingModule;

    beforeEach(async () => {
        prismaService = createSpyObj(PrismaService);
        (prismaService as any).article = createSpyObj(PrismaRepository);
        (prismaService as any).tag = createSpyObj(PrismaRepository);
        testingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: PrismaService,
                    useValue: prismaService,
                },
                ArticleService,
                SlugService,
                TagService,
            ],
        }).compile();

        service = testingModule.get(ArticleService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('findMany', async () => {
        await service.findMany({ where: { id: { equals: 'a' } } });
        expect(prismaService.article.findMany).toHaveBeenCalledWith(
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
