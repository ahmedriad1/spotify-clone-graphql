import {
    Injectable,
    Logger,
    OnModuleDestroy,
    OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

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
        // @ts-ignore
        this.$on('query', (event: any) => {
            const params: any[] = JSON.parse(event.params);
            const query = (event.query as string).replace(/\?/g, (s) => {
                return `\u001B[90m${JSON.stringify(
                    params.shift(),
                )}\u001B[0m\u001B[96m`;
            });
            this.logger.verbose(`\u001B[96m${query}\u001B[0m`, 'Query');
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
