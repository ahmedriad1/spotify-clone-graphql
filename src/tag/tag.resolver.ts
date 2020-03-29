import { Tag } from '@generated/type-graphql/models/Tag';
import { Query, Resolver } from '@nestjs/graphql';

import { TagService } from './tag.service';

@Resolver()
export class TagResolver {
    constructor(private readonly tagService: TagService) {}

    @Query(() => [Tag])
    async tags() {
        return this.tagService.findAll();
    }
}
