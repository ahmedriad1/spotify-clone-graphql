import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
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
    private lastRequestId: string = '';

    constructor(
        private readonly logger: Logger,
        private readonly environment: AppEnvironment,
        // todo: get rid of scope.request inject it will broke validation
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

        if (this.environment.nodeEnvironment === 'development') {
            this.$on(
                // @ts-ignore
                'query',
                createPrismaQueryEventHandler({
                    logger: (() => {
                        this.logger.setContext(this.requestId);
                        let count = 1;
                        return query => {
                            count =
                                this.lastRequestId !== this.requestId ? 1 : count + 1;
                            this.lastRequestId = this.requestId;
                            this.logger.verbose(`${count}. ${query}`);
                        };
                    })(),
                    format: true,
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
