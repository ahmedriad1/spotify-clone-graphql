import { Prisma } from '@prisma/client';

type UserPayload = Prisma.UserGetPayload<{}>;

export function createUser(parts: Partial<UserPayload> = {}): UserPayload {
    return {
        id: 'user_id',
        email: 'user_email',
        name: 'user_name',
        password: 'user_password',
        bio: 'user_bio',
        image: 'user_image',
        ...parts,
    };
}
