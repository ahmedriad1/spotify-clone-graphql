import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { TagResolver } from './tag.resolver';
import { TagService } from './tag.service';

@Module({
    imports: [PrismaModule],
    providers: [TagResolver, TagService],
})
export class TagModule {}
