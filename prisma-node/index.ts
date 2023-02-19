import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUsers() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      skills: {
        include: {
          skill: true,
        },
      },
    },
  });
  console.log(users);
}

async function createUser() {
  const user = await prisma.user.upsert({
    where: {
      email: 'gustavo2@gmail.com',
    },
    update: {},
    create: {
      name: 'Gus 2',
      email: 'gustavo2@gmail.com',
      dateOfBirth: new Date('1988-08-22'),
    },
  });

  await prisma.userSkills.upsert({
    where: { skillId_userId: { userId: user.id, skillId: 2 } },
    update: {},
    create: {
      userId: user.id,
      skillId: 2,
    },
  });
}

getUsers();
// createUser()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
