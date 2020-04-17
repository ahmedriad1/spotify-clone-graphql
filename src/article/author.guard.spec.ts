import { toMockedInstance } from 'to-mock';

import { ArticleService } from './article.service';
import { AuthorGuard } from './author.guard';

describe('AuthorGuard', () => {
    let articleService: jest.Mocked<ArticleService>;

    it('should be defined', () => {
        articleService = toMockedInstance(ArticleService);
        expect(new AuthorGuard(articleService)).toBeDefined();
    });
});
