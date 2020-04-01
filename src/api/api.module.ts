import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLClient } from 'graphql-request';

import { ApiController } from './api.controller';
import { ApiService } from './api.service';

@Module({
    imports: [ConfigModule],
    controllers: [ApiController],
    providers: [
        ApiService,
        {
            provide: 'GraphQLClient',
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                const url = config.get('graphqlEndpoint');
                return new GraphQLClient(url);
            },
        },
    ],
})
export class ApiModule {}
