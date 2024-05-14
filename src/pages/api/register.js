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

const bcrypt = require("bcrypt")
const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = "not_bacon"

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
            console.log(error)
            // console.log(error)
            // let used = (error?.meta.target[0] == "email") ? "email" : "name"
            // console.log(used)
            // return res.status(400).json({message : `${error?.meta.target[0]} sudah terdaftar!`, data: used})
            return res.status(400).json({message : `${error} `, data: "used"})
        }
    })

    // const allUsers = await prisma.users.findMany()
    // console.log(allUsers)

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