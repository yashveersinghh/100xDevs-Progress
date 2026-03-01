import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({ connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres" });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

//INSERT
async function insertUser(username: string, password: string, firstName: string, lastName: string) {
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
    })
    console.log(user)
}
insertUser("yashveer@gmail.com", "password", "Yashveer", "Singh")

//UPDATE

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName
    }
  });
  console.log(res);
}

updateUser("yashveer@gmail.com", {
    firstName: "yash",
    lastName: "singh"
})

//READ

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        email: username
    }
  })
  console.log(user);
}

getUser("yashveer@gmail.com");