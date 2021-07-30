import { PrismaModule } from '@app_modules/prisma';
import { Module } from '@nestjs/common';
import { CloudinaryModule } from 'src/cloudinary/cloudinary.module';

import { ArtistResolver } from './artist.resolver';
import { ArtistService } from './artist.service';

@Module({
    imports: [PrismaModule, CloudinaryModule],
    providers: [ArtistResolver, ArtistService],
    exports: [ArtistService],
})
export class ArtistModule {}
