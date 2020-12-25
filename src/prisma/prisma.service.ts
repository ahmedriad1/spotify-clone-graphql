import {
    Injectable,
    Logger,
    OnModuleDestroy,
    OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { createPrismaQueryEventHandler } from 'prisma-query-log';

/**
 * Prisma client as nest service.
 */
@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    constructor(private readonly logger: Logger) {
        super({
            errorFormat: 'minimal',
            log: [
                {
                    level: 'query',
                    emit: 'event',
                },
            ],
        });
        const log = createPrismaQueryEventHandler({
            logger: (query) => this.logger.verbose(query, 'Query'),
            colorQuery: '\u001B[96m',
            colorParameter: '\u001B[90m',
        });
        // @ts-ignore
        this.$on('query', log);
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
