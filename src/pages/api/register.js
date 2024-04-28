const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


export default async function handler(req, res) {
    const result = req.body
    console.log(result)
    

<<<<<<< HEAD
  res.status(200).json({ message: "User created successfully" });

  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
=======
    // prisma queries will be here

    // addData
    await prisma.user.create({
        data: {
            name: result.name,
            email: result.email,
            password: result.password
        }
    })

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)

    console.log("Running")
    return res.status(200).json({status: "success"})
>>>>>>> 681b7b84f116087191708bf775016433eec0dd88
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