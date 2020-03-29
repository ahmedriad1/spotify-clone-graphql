import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import gotql from 'gotql';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [ConfigModule],
    controllers: [ApiController],
    providers: [{ provide: 'gotql', useValue: gotql }, ApiService],
})
export class ApiModule {}
