"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    const users = [
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
    ];
    await Promise.all(users.map(user => {
        return prisma.user.upsert({
            where: { email: user.email },
            update: {},
            create: user
        });
    }));
}
main();
//# sourceMappingURL=seed.js.map