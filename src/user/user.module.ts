import { Module } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRepository } from './user.repository';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { UserExistsValidator } from './validators/user-exists.validator';

@Module({
    imports: [PrismaModule, AuthModule],
    providers: [UserService, UserResolver, UserRepository, UserExistsValidator],
    exports: [UserService],
})
export class UserModule {}
