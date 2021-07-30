import { PrismaModule } from '@app_modules/prisma';
import { Module } from '@nestjs/common';

// import { AuthModule } from '../auth/auth.module';
import { GenreResolver } from './genre.resolver';
import { GenreService } from './genre.service';

@Module({
    imports: [PrismaModule],
    providers: [GenreService, GenreResolver],
    exports: [GenreService],
})
export class GenreModule {}
