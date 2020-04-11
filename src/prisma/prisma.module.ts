import { DynamicModule, Global, Inject, Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';

const injectPrismaNames: string[] = [];

export function InjectPrisma(name: string) {
    if (!injectPrismaNames.includes(name)) {
        injectPrismaNames.push(name);
    }
    return Inject(InjectPrismaToken(name));
}

export function InjectPrismaToken(name: string) {
    return `Prisma_${name}`;
}

function createPrismaClientProvider(name: string) {
    return {
        provide: InjectPrismaToken(name),
        useFactory: (prisma: PrismaService) => prisma[name],
        inject: [PrismaService],
    };
}

@Global()
@Module({})
export class PrismaModule {
    static forRoot(): DynamicModule {
        const prismaClientProviders = injectPrismaNames.map(createPrismaClientProvider);
        return {
            module: PrismaModule,
            providers: [PrismaService, ...prismaClientProviders],
            exports: [PrismaService, ...prismaClientProviders],
        };
    }
}
