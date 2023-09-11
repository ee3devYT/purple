import { config } from "dotenv";
config();

import Client from "./utils/classes/client";

export const client = new Client();   

client.start();
client.loadModules();
client.deploy();