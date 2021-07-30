import { AlbumModule } from '@album/album.module';
import { PrismaModule } from '@app_modules/prisma';
import { ArtistModule } from '@artist/artist.module';
import { GenreModule } from '@genre/genre.module';
import { Global, Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import { TrackModule } from '@track/track.module';
import { UserModule } from '@user/user.module';
import { PubSub } from 'apollo-server-express';
import { NestologModule } from 'nestolog';

import { ApiModule } from './api/api.module';
import { AppEnvironment, graphqlModuleFactory } from './app.environment';

@Global()
@Module({
    imports: [
        PrismaModule.registerAsync({
            inject: [AppEnvironment],
            useFactory: async (appEnvironment: AppEnvironment) => {
                return {
                    logQueries: appEnvironment.isDevelopment(),
                };
            },
        }),
        EnvironmentModule.forRoot({
            isGlobal: true,
            loadEnvFile: true,
            useClass: AppEnvironment,
        }),
        GraphQLModule.forRootAsync({
            inject: [Logger],
            useFactory: graphqlModuleFactory,
        }),
        NestologModule.forRoot(),
        ApiModule,
        UserModule,
        AlbumModule,
        GenreModule,
        ArtistModule,
        TrackModule,
    ],
    providers: [
        Logger,
        {
            provide: 'PUB_SUB',
            useValue: new PubSub(),
        },
    ],
    exports: [Logger, 'PUB_SUB'],
})
export class AppModule {}
