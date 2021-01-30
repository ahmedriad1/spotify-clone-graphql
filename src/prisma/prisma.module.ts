import { DynamicModule, Global, Module } from '@nestjs/common';

import { createRepositoryProviers } from './prisma.providers';
import { PrismaRepository } from './prisma.repository';

@Global()
@Module({})
export class PrismaModule {
    static forRoot(): DynamicModule {
        const repositoryProviers = createRepositoryProviers();
        return {
            module: PrismaModule,
            providers: [PrismaRepository, ...repositoryProviers],
            exports: [PrismaRepository, ...repositoryProviers],
        };
    }
}
