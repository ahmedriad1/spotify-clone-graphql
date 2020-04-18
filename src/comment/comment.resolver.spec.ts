import { Test, TestingModule } from '@nestjs/testing';
import { toMockedInstance } from 'to-mock';

import { ArticleService } from '../article/article.service';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';

describe('CommentResolver', () => {
    let resolver: CommentResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommentResolver,
                {
                    provide: CommentService,
                    useValue: toMockedInstance(CommentService),
                },
                {
                    provide: ArticleService,
                    useValue: toMockedInstance(ArticleService),
                },
            ],
        }).compile();

        resolver = module.get<CommentResolver>(CommentResolver);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
