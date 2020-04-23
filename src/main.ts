import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';

import { AppModule } from './app.module';

export async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const config = app.get(ConfigService);
    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            validationError: {
                target: false,
            },
        }),
    );
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    const port = config.get('port');
    await app.listen(port);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
    return app;
}

if (process.env.NODE_ENV !== 'test') {
    bootstrap()
        // eslint-disable-next-line promise/always-return
        .then(async (app) => {
            console.log(`GraphQL application is running on: ${await app.getUrl()}`, 'bootstrap');
        })
        .catch((err) => {
            console.error(err);
        });
}
