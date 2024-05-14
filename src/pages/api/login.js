const { PrismaClient } = require("@prisma/client");
const { PrismaLibSQL } = require("@prisma/adapter-libsql");
const { createClient } = require("@libsql/client");

const libsql = createClient({
  url: `${process.env.TURSO_DATABASE_URL}`,
  authToken: `${process.env.TURSO_AUTH_TOKEN}`,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default async function handler(req, res) {
  const result = req.body;
  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  console.log(result);

  const resultPassword = await bcrypt.hash(result.password, saltRounds);

  console.log(resultPassword);

  const searchLogin = await prisma.user.findFirst({
    where: {
      AND: {
        email: result.email,
        password: resultPassword,
      },
    },
  });
  if (!searchLogin) {
    console.log("Login failed");
    return res.status(200).json({ message: "Login failed" });
  } else {
    console.log("Login Success");
    console.log(searchLogin);
    res.status(200).json({ message: "Login Success" });
  }
}
