import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { LoggerModule } from 'nestjs-pino';

import { ApiModule } from './api/api.module';
import { config } from './app.config';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

export async function graphqlModuleFactory(prismaService: PrismaService) {
    return {
        tracing: false,
        autoSchemaFile: '~schema.gql',
        context: () => {
            return { prisma: prismaService, token: (null as unknown) as string };
        },
        // formatError: null as any,
    };
}

@Module({
    imports: [
        UserModule,
        ApiModule,
        PrismaModule,
        TagModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            load: [config],
        }),
        GraphQLModule.forRootAsync({
            imports: [PrismaModule],
            inject: [PrismaService],
            useFactory: graphqlModuleFactory,
        }),
        LoggerModule.forRootAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    pinoHttp: {
                        useLevel: 'trace',
                        level: config.get('production') ? 'warn' : 'info',
                        prettyPrint: !config.get('production'),
                    },
                };
            },
        }),
    ],
    providers: [],
})
export class AppModule {}
