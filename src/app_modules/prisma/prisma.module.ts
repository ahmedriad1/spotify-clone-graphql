import { DynamicModule, Module, Provider, Type } from '@nestjs/common';

import { createRepositoryProviers } from './inject-repository.decorator';
import { PrismaRepository } from './prisma.repository';
import {
    defaultPrismaOptions,
    PRISMA_OPTIONS,
    PrismaModuleAsyncOptions,
    PrismaModuleOptions,
    PrismaOptionsFactory,
} from './prisma-options';

@Module({})
export class PrismaModule {
    static register(options: PrismaModuleOptions): DynamicModule {
        const repositoryProviers = createRepositoryProviers();
        options = { ...defaultPrismaOptions, ...options };
        return {
            global: true,
            module: PrismaModule,
            providers: [
                {
                    provide: PRISMA_OPTIONS,
                    useValue: options,
                },
                PrismaRepository,
                ...repositoryProviers,
            ],
            exports: [...repositoryProviers, PrismaRepository],
        };
    }

    static registerAsync(options: PrismaModuleAsyncOptions): DynamicModule {
        const repositoryProviers = createRepositoryProviers();
        return {
            global: true,
            module: PrismaModule,
            imports: options.imports || [],
            providers: [
                ...this.createAsyncProviders(options),
                ...repositoryProviers,
                PrismaRepository,
            ],
            exports: [...repositoryProviers, PrismaRepository],
        };
    }

    private static createAsyncProviders(options: PrismaModuleAsyncOptions): Provider[] {
        if (options.useFactory || options.useExisting) {
            return [this.createAsyncOptionsProvider(options)];
        }

        const useClass = options.useClass as Type<PrismaOptionsFactory>;
        return [
            this.createAsyncOptionsProvider(options),
            {
                provide: useClass,
                useClass,
            },
        ];
    }

    private static createAsyncOptionsProvider(
        options: PrismaModuleAsyncOptions,
    ): Provider {
        if (options.useFactory) {
            return {
                provide: PRISMA_OPTIONS,
                useFactory: async (...args: any[]) => {
                    // eslint-disable-next-line sonarjs/prefer-immediate-return
                    const result = {
                        ...defaultPrismaOptions,
                        ...(options.useFactory && (await options.useFactory(...args))),
                    };
                    return result;
                },
                inject: options.inject || [],
            };
        }

        return {
            provide: PRISMA_OPTIONS,
            useFactory: (factory: PrismaOptionsFactory) =>
                factory.createPrismaOptions(),
            inject: [
                (options.useClass || options.useExisting) as Type<PrismaOptionsFactory>,
            ],
        };
    }
}
