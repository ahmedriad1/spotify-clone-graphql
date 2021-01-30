import { Inject, Provider } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { PrismaRepository } from './prisma.repository';

function createRepositoryProvier(name: string): Provider {
    return {
        provide: `${name}PrismaRepository`,
        inject: [PrismaRepository],
        useFactory: (prisma: PrismaRepository) => prisma[name],
    };
}

type TestDelegate = { findMany: (args: any) => any };
type PrismaDelegateNames = keyof {
    [P in keyof PrismaClient as PrismaClient[P] extends TestDelegate
        ? P
        : never]: PrismaClient[P];
};

const prismaRepositories = new Set<PrismaDelegateNames>();

/**
 * Example:
 * @InjectRepository('user') repository: PrismaRepository['user'] or PrismaClient['user']
 */
export function InjectRepository(name: PrismaDelegateNames) {
    prismaRepositories.add(name);
    return Inject(`${name}PrismaRepository`);
}

export function createRepositoryProviers() {
    return [...prismaRepositories].map(name => createRepositoryProvier(name));
}
