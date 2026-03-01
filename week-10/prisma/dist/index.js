import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
const pool = new pg.Pool({ connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres" });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });
async function insertUser(username, password, firstName, lastName) {
    const user = await prisma.user.create({
        data: {
            email: username,
            password,
            firstName,
            lastName
        },
        select: {
            id: true,
            email: true
        }
    });
    console.log(user);
}
insertUser("yashveer@gmail.com", "password", "Yashveer", "Singh");
//# sourceMappingURL=index.js.map