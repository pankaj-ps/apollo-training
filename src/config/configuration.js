import { config } from 'dotenv';
config();

const envVars  = process.env;


const configuration = Object.freeze({

port : envVars.PORT,

}); 



//console.log("Config is :::::::::::", configuration);
export default configuration;