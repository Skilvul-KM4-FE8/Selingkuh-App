const { PrismaClient } =require("@prisma/client")

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const result = req.body
    console.log(result)
    

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