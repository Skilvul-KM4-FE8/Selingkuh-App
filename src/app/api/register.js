const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main(req, res) {
  // prisma queries will be here

  // addData
  await prisma.user.create({
    data: {
      name: req.user.name,
      email: req.user.email,
      password: req.user.password,
    },
  });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
