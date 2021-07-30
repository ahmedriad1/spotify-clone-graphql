import 'dotenv-flow/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding...');
    await prisma.$connect();

    await prisma.user.deleteMany({});

    // Users
    await prisma.user.create({
        data: {
            name: 'root',
            email: 'root@conduit.com',
            password: '123',
        },
    });

    await prisma.user.create({
        data: {
            name: 'bob',
            email: 'bob@conduit.com',
            password: '123',
        },
    });

    await prisma.user.create({
        data: {
            name: 'alice',
            email: 'alice@conduit.com',
            password: '123',
        },
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
