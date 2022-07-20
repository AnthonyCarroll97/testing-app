import { Prisma, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient()

async function main(){
    const users: Prisma.UserCreateInput[] = [
        {
            name: "anthony",
            email: "anthony@email.com"
        },
        {
            name: "lachy",
            email: "lachy@email.com"
        },
        {
            name: "andrew",
            email: "andrew@email.com"
        }
    ]

    await Promise.all(users.map(user => {
        return prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user
        })
    }))
}

main()