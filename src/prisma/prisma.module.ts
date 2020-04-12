import { DynamicModule, Global, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

@Global()
@Module({})
export class PrismaModule {
    static forRoot(): DynamicModule {
        return {
            module: PrismaModule,
            providers: [PrismaService],
            exports: [PrismaService],
        };
    }
}
