const { PrismaClient } = require("@prisma/client");
const { PrismaLibSQL } = require("@prisma/adapter-libsql");
const { createClient } = require("@libsql/client");

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

// export default async function handler(req, res) {
//   await prisma.user.create({
//     data: {
//       name: "test1",
//       email: "test1@gmail.com",
//       password: "123456",
//     },
//   });
//   res.status(200).json({ message: "User created" });
// }

export default async function handler(req, res) {
  const result = req.body;
  console.log(result);

  await prisma.user.create({
    data: {
      name: result.name,
      email: result.email,
      password: result.password,
    },
  });

  console.log("User created");
  res.status(200).json({ message: "User created" });
}
