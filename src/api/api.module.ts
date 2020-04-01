import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [ConfigModule],
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule {}
