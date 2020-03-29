import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({
            errorFormat: 'minimal',
            log: ['query'],
        });
    }

    async onModuleInit() {
        await this.connect();
        // await this.raw(`select 1 from "User"`);
        // var r = await this.raw(`SELECT sqlite_version()`);
        // var r = await this.raw(`SELECT * FROM sqlite_master`);
        // console.log('r', r);
        // await this.user.findOne({ select: { id: true }, where: { id: '1' } });
    }

    async onModuleDestroy() {
        await this.disconnect();
    }
}
