import { Query, Resolver } from '@nestjs/graphql';

import { Tag } from './tag.model';
import { TagService } from './tag.service';

@Resolver()
export class TagResolver {
    constructor(private readonly tagService: TagService) {}

    @Query(() => [Tag])
    async tags() {
        return this.tagService.findAll();
    }
}
