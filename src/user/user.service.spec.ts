import { Test, TestingModule } from '@nestjs/testing';
import { MockFactory } from 'app_modules/jest-mock-factory';

import { InjectPrismaToken } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaUser } from './types';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

jest.mock('./user.repository');

describe('UserService', () => {
    let service: UserService;
    let prismaUser: jest.Mocked<PrismaUser>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                PrismaService,
                UserRepository,
                {
                    provide: InjectPrismaToken('user'),
                    inject: [PrismaService],
                    useFactory: (prisma: PrismaService) => MockFactory.create(prisma.user),
                },
            ],
        }).compile();

        service = module.get(UserService);
        prismaUser = module.get(InjectPrismaToken('user'));
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('find one user', async () => {
        await service.findOne({ id: 'u1' });
        expect(prismaUser.findOne).toHaveBeenCalledWith({ where: { id: 'u1' } });
    });

    it('follow should call connect if value is true', async () => {
        await service.follow({ id: 'u1' }, { id: 'f1' }, true);
        const args = prismaUser.update.mock.calls.pop();
        expect(args?.[0].data?.followers?.connect).toEqual({ id: 'f1' });
    });

    it('follow should call disconnect if value is false', async () => {
        await service.follow({ id: 'u2' }, { id: 'f2' }, false);
        const args = prismaUser.update.mock.calls.pop();
        expect(args?.[0].data?.followers?.disconnect).toEqual({ id: 'f2' });
    });
});
