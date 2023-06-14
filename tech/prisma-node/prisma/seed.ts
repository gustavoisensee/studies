import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const country = await prisma.country.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Netherlands'
    },
  })

  await prisma.skill.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'Skill A'
    },
  })

  const user = await prisma.user.upsert({
    where: { email: 'gus@gmail.com' },
    update: {
      countryId: country.id
    },
    create: {
      email: 'gus@gmail.com',
      name: 'Gus',
      dateOfBirth: new Date('1988-08-22'),
      countryId: country.id
    },
  })

  let userSkills: Prisma.UserSkillsSkillIdUserIdCompoundUniqueInput = {
    skillId: 1,
    userId: 1
  };

  await prisma.userSkills.upsert({
    where: { skillId_userId: userSkills },
    update: {},
    create: {
      userId: 1,
      skillId: 1
    },
  });


  await prisma.post.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Test post',
      authorId: user.id,
      content: 'Test content of the post',
      published: false
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })