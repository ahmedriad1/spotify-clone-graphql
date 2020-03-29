import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { logger: true });
    const config = app.get(ConfigService);
    app.useGlobalPipes(
        new ValidationPipe({
            validationError: {
                target: false,
            },
        }),
    );
    const port = config.get('port');
    await app.listen(port);
    console.log(`Main application is running on: ${await app.getUrl()}`, 'bootstrap');
}
bootstrap();
