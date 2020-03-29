import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { ApiModule } from './api/api.module';
import { config } from './app.config';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TagModule } from './tag/tag.module';

export async function graphqlModuleFactory(prismaService: PrismaService) {
    return {
        tracing: false,
        autoSchemaFile: '~schema.gql',
        context: () => ({ prisma: prismaService }),
        // formatError: null as any,
    };
}

@Module({
    imports: [
        ApiModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: ['.env'],
            load: [config],
        }),
        PrismaModule,
        GraphQLModule.forRootAsync({
            imports: [PrismaModule],
            inject: [PrismaService],
            useFactory: graphqlModuleFactory,
        }),
        TagModule,
    ],
    providers: [],
})
export class AppModule {}
