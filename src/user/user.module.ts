import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
    imports: [PrismaModule],
    providers: [UserService, UserResolver, UserRepository],
})
export class UserModule {}
