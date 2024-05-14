
// const { PrismaClient } = require("@prisma/client");

// import { PrismaClient } from '@prisma/client'
// import { PrismaLibSQL } from '@prisma/adapter-libsql'
// import { createClient } from '@libsql/client'

const { PrismaClient } = require("@prisma/client")
const { PrismaLibSQL } = require("@prisma/adapter-libsql")
const { createClient } = require("@libsql/client")

const libsql = createClient({
    url: `${process.env.TURSO_DATABASE_URL}`,
    authToken: `${process.env.TURSO_AUTH_TOKEN}`,
})

const adapter = new PrismaLibSQL(libsql)
const prisma = new PrismaClient({ adapter })

// const prisma = new PrismaClient();


const bcrypt = require("bcrypt");
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";

export default async function handler(req, res) {

    
    const result = req.body
    // console.log(result)
    
    bcrypt.hash(result.password, saltRounds,  async (err, hash) => {
        try {
            await prisma.users.create({
                data: {
                    name: result.name,
                    email: result.email,
                    password: hash
                }
            })
            return res.status(200).json({status:  "success"})
        } catch (error) {
            console.log("===========")
            console.log(error.message.includes("email"))
            // console.log(error)
            let used = (error.message.includes("email")) ? "Email" : "Nama"
            // console.log(used)
            // return res.status(400).json({message : `${error?.meta.target[0]} sudah terdaftar!`, data: used})
            return res.status(400).json({message : `${used} sudah terdaftar. Silahkan gunakan ${used} yang lain! `, data: used})
        }
    })

    // const allUsers = await prisma.users.findMany()
    // console.log(allUsers)


  const isUsedEmail = await prisma.user.findFirst({
    where: {
      email: result.email,
    },
  });
  const isUsedUsername = await prisma.user.findFirst({
    where: {
      name: result.name,
    },
  });

  //   console.log(user)

  //   if (user) {
  if (isUsedEmail) {
    return res
      .status(400)
      .json({ message: "Email sudah terpakai", email: true });
  }
  if (isUsedUsername) {
    return res
      .status(400)
      .json({ message: "Username sudah terpakai", name: true });
  }
  //   }

  // let hashedPass = ""
  // console.log(result)

  bcrypt.hash(result.password, saltRounds, async (err, hash) => {
    await prisma.user.create({
      data: {
        name: result.name,
        email: result.email,
        password: hash,
      },
    });
  });

  // addData

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);

  console.log("Running");
  return res.status(200).json({ status: "success" });
}

// handler()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.log(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })
