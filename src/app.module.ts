import { Global, Logger, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloErrorConverter, extendMapItem, mapItemBases } from 'apollo-error-converter';
import { IncomingMessage } from 'http';

import { ApiModule } from './api/api.module';
import { config } from './app.config';
import { ArticleModule } from './article/article.module';
import { CommentModule } from './comment/comment.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';

export async function graphqlModuleFactory(prismaService: PrismaService, logger: Logger) {
    return {
        tracing: false,
        autoSchemaFile: '~schema.gql',
        context: (data) => {
            return {
                prisma: prismaService,
                token: undefined as string | undefined,
                req: data.req as IncomingMessage,
            };
        },
        formatError: new ApolloErrorConverter({
            logger,
            errorMap: [
                {
                    BadRequestException: extendMapItem(mapItemBases.InvalidFields, {
                        logger: true,
                        data: (err) => {
                            return err?.response;
                        },
                    }),
                },
            ],
        }),
    };
}

@Global()
@Module({
    imports: [
        UserModule,
        ApiModule,
        PrismaModule.forRoot(),
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
        ArticleModule,
        CommentModule,
    ],
    providers: [Logger],
    exports: [Logger],
})
export class AppModule {}
