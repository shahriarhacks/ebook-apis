import { config as c } from "dotenv";
c();

const _config = {
   port: process.env.PORT,
};

export const config = Object.freeze(_config);
