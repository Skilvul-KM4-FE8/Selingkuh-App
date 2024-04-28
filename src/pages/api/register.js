const { PrismaClient } =require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    // prisma queries will be here

    // addData
    // await prisma.user.create({
    //     data: {
    //         name: "Rafai (dev)",
    //         email: "devtest@gmail.com",
    //         password: "test123"
    //     }
    // })

    const allUsers = await prisma.user.findMany()
    console.log(allUsers)

    console.log("Running")
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })