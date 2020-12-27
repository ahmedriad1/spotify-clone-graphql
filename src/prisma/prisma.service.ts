import {
    Injectable,
    Logger,
    OnModuleDestroy,
    OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { RequestId } from 'app_modules/express-request-id';
import { createPrismaQueryEventHandler } from 'prisma-query-log';

import { AppEnvironment } from '../app.environment';

/**
 * Prisma client as nest service.
 */
@Injectable()
export class PrismaService
    extends PrismaClient
    implements OnModuleInit, OnModuleDestroy {
    constructor(
        private readonly logger: Logger,
        private readonly environment: AppEnvironment,
        @RequestId() private readonly requestId: string,
    ) {
        super({
            errorFormat: 'minimal',
            log:
                environment.nodeEnvironment === 'development'
                    ? [
                          {
                              level: 'query',
                              emit: 'event',
                          },
                      ]
                    : undefined,
        });

        if (environment.nodeEnvironment === 'development') {
            this.$on(
                // @ts-ignore
                'query',
                createPrismaQueryEventHandler({
                    logger: (query) =>
                        this.logger.verbose(query, this.requestId),
                    colorQuery: '\u001B[96m',
                    colorParameter: '\u001B[90m',
                }),
            );
        }
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
