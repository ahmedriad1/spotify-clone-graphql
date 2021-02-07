import { ModuleMetadata, Type } from '@nestjs/common';

export const PRISMA_OPTIONS = Symbol('PRISMA_OPTIONS');

export const defaultPrismaOptions = {
    logQueries: false,
};

export type PrismaModuleOptions = typeof defaultPrismaOptions;

export interface PrismaOptionsFactory {
    createPrismaOptions(): Partial<PrismaModuleOptions>;
}

export interface PrismaModuleAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
    useClass?: Type<PrismaOptionsFactory>;
    useExisting?: Type<PrismaOptionsFactory>;
    useFactory?: (
        ...args: any[]
    ) => Promise<Partial<PrismaModuleOptions>> | Partial<PrismaModuleOptions>;
    inject?: any[];
}
