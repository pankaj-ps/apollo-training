import { config } from 'dotenv';
config();

const envVars = process.env;

const configuration = Object.freeze({
    port: envVars.PORT,
    service_URL:envVars.SERVICE_URL,
});

export default configuration;