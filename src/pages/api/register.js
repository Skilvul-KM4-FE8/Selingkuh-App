const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bcrypt = require("bcrypt")
const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = "not_bacon"

export default async function handler(req, res) {
    
    const result = req.body
    
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
            // console.log(error)
            let used = (error?.meta.target[0] == "email") ? "email" : "name"
            console.log(used)
            return res.status(400).json({message : `${error?.meta.target[0]} sudah terdaftar!`, data: used})
        }
    })

    const allUsers = await prisma.users.findMany()
    console.log(allUsers)

    console.log("Running")
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