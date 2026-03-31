// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users2 (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertUser(username: string, email: string, password: string) {
    try{
        await client.connect()
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)"; //SQL INJECTION PREVENTION
        const values = [username, email, password];
        const result = await client.query(insertQuery, values);
        console.log(result)
    } catch (error) {
        console.error("Error inserting user:", error);
    } finally {
        await client.end();
    }
}

createUsersTable();