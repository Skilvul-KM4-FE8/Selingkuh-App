const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const bcrypt = require("bcrypt")
const saltRounds = 10
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = "not_bacon"

export default async function handler(req, res) {
    
    const result = req.body
    console.log(result.email)
    console.log(result.name)

    // check email is used
    // const user = await prisma.user.findFirst({
    //     where: {
    //       OR: [
    //         {
    //           email: result.email,
    //         },
    //         {
    //           name: result.name,
    //         },
    //       ],
    //     },
    //   });

    const isUsedEmail = await prisma.user.findFirst({
        where: {
            email: result.email,
        },
    })
    const isUsedUsername = await prisma.user.findFirst({
        where: {
            name : result.name,
        },
    })

    //   console.log(user)
      
    //   if (user) {
        if (isUsedEmail) {
          return res.status(400).json({ message: "Email sudah terpakai", email: true });
        } 
        if(isUsedUsername) {
          return res.status(400).json({ message: "Username sudah terpakai", name: true });
        }
    //   }



    // let hashedPass = "" 
    // console.log(result)
    
    bcrypt.hash(result.password, saltRounds,  async (err, hash) => {
        await prisma.user.create({
            data: {
                name: result.name,
                email: result.email,
                password: hash
            }
        })
    })

    // addData


    const allUsers = await prisma.user.findMany()
    console.log(allUsers)


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
