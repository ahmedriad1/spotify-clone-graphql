import { ConflictException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { toMockedInstance } from 'to-mock';

import { createUser } from '../user/testing';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';
import { createArticle } from './testing';

describe('ArticleResolver', () => {
    let resolver: ArticleResolver;
    let service: jest.Mocked<ArticleService>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ArticleResolver,
                {
                    provide: ArticleService,
                    useValue: toMockedInstance(ArticleService),
                },
            ],
        }).compile();

        resolver = module.get(ArticleResolver);
        service = module.get(ArticleService);
        service.findOne = jest.fn();
        service.favorite = jest.fn();
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });

    it('favorite article second time should fail', async () => {
        service.findOne.mockResolvedValue(
            createArticle({
                favoritedBy: [createUser({ id: '2' })],
            }),
        );
        service.favorite.mockResolvedValue(
            createArticle({
                favoritesCount: 1,
                favoritedBy: [createUser({ id: '2' })],
            }),
        );

        await expect(async () => {
            await resolver.favoriteArticle({ id: '1' }, true, {}, { id: '2' });
        }).rejects.toThrow(ConflictException);

        const result = await resolver.favoriteArticle({ id: '1' }, false, {}, { id: '2' });
        expect(result).toEqual(expect.objectContaining({ favoritesCount: 1 }));
    });
});
