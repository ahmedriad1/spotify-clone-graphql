import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { TagModule } from '../tag/tag.module';
import { ArticleResolver } from './article.resolver';
import { ArticleService } from './article.service';
import { SlugService } from './slug/slug.service';

@Module({
    imports: [PrismaModule, TagModule],
    providers: [ArticleResolver, ArticleService, SlugService],
})
export class ArticleModule {}
