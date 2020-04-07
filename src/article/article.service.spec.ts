import { Test, TestingModule } from '@nestjs/testing';

import { PrismaService } from '../prisma/prisma.service';
import { TagService } from '../tag/tag.service';
import { ArticleService } from './article.service';
import { SlugService } from './slug/slug.service';
jest.mock('./slug/slug.service');
jest.mock('../prisma/prisma.service');
jest.mock('../tag/tag.service');

describe('ArticleService', () => {
    let service: ArticleService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ArticleService, PrismaService, SlugService, TagService],
        }).compile();

        service = module.get<ArticleService>(ArticleService);
    });

    fit('should be defined', () => {
        expect(service).toBeDefined();
    });
});
