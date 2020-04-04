import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Seeding...');
    await prisma.connect();

    const user = await prisma.user.create({
        data: {
            name: 'root',
            email: 'root@conduit.com',
            password: '123',
        },
    });

    console.log({ user });
}

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.disconnect();
    });
