import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Prisma client as nest service.
 */
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(private readonly logger: Logger) {
        super({
            errorFormat: 'minimal',
            log: ['query'],
        });

        // @ts-ignore
        this.$on('query', (event: any) => {
            this.logger.debug(event.params, 'prisma:query');
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
