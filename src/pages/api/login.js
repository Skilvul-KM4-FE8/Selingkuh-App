const { PrismaClient } = require("@prisma/client");
const { PrismaLibSQL } = require("@prisma/adapter-libsql");
const { createClient } = require("@libsql/client");

const libsql = createClient({
  url: process.env.TURSO_DATABASE_URL,
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default async function handler(req, res) {
  const { email, password } = req.body;
  const bcrypt = require("bcrypt");

  try {
    // Cari user berdasarkan email
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      console.log("Login failed: user not found");
      return res.status(200).json({ message: "Login failed: user not found" });
    }

    // Bandingkan password yang di-hash dengan password yang diberikan
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Login failed: incorrect password");
      return res
        .status(200)
        .json({ message: "Login failed: incorrect password" });
    }

    console.log("Login Success");
    console.log(user);
    res.status(200).json({ message: "Login Success" });
  } catch (error) {
    console.error("An error occurred during login:", error);
    res.status(500).json({ message: "An error occurred during login" });
  }
}
