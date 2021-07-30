import { Prisma } from '@prisma/client';

type UserPayload = Prisma.UserGetPayload<true>;

export function createUser(parts: Partial<UserPayload> = {}): UserPayload {
    return {
        id: 'user_id',
        name: 'user_name',
        email: 'user_email',
        password: 'user_password',
        createdAt: null,
        updatedAt: null,
        ...parts,
    };
}
