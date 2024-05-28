import { config as c } from "dotenv";
c();

const _config = {
   port: process.env.PORT,
   mongo_uri: process.env.MONGO_CONNECTION_STRING,
   env: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
