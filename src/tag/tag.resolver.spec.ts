import { Test, TestingModule } from '@nestjs/testing';

import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';

jest.mock('./tag.service');

describe('TagResolver', () => {
    let resolver: TagResolver;
    let tagService: jest.Mocked<TagService>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TagResolver, TagService],
        }).compile();

        resolver = module.get<TagResolver>(TagResolver);
        tagService = module.get(TagService);
    });

    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
