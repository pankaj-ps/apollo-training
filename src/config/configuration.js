import { config } from 'dotenv';
config();

const envVars = process.env;

const configuration = Object.freeze({
    port: envVars.PORT,
});

export default configuration;