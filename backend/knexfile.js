import { configDotenv } from "dotenv";
import fs from 'node:fs'
configDotenv()
const config = {
  development: {
    client: "pg",
    connection: {
      host:process.env.DB_HOST,
      port:Number(process.env.DB_PORT),
      password:process.env.DB_PASSWORD,
      user:process.env.DB_USER,
      database:process.env.DB_DATABASE,
      ssl:{
        ca:fs.readFileSync('./cred/ca.pem').toString(),
        rejectUnauthorized:true
      }
    },
    pool:{
      min:2,
      max:10
    },
    migrations:{
      tableName:"knex_migrations",
      directory:'./migrations'
    }
  },

};

export default config;
