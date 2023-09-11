import { Client, Collection } from "discord.js";
import { Command } from "../types";
import logger from "../helpers";
import { readdirSync } from "node:fs";
import connectDB from "../../database/connection";

export default class extends Client {
    public commands: Collection<string, Command> = new Collection();
    public commandsArray: Command["structure"][] = [];

    public constructor() {
        super({

                intents: [32767]
            })
    }

    public loadModules() {
       // Commands
        for (const dir of readdirSync("./src/commands")) {
            for (const file of readdirSync('./src/commands/' + dir)) {
                const module: Command = require(`../../commands/` + dir + '/' + file).default;
                this.commands.set(module.structure.name, module);
                this.commandsArray.push(module.structure);

                logger.info(`Loaded command highlight(${module.structure.name})`);
            }
        }

        // Events
        for (const dir of readdirSync("./src/events")) {
            for (const file of readdirSync('./src/events/' + dir)) {
                require(`../../events/` + dir + '/' + file);

                logger.info(`Loaded new event highlight(${file})`)
            }
        }
    }

    public command = class {
        public structure: Command["structure"];
        public run: Command["run"];

        public constructor(data: Command) {
            this.structure = data.structure;
            this.run = data.run;
        }
    }

    public async deploy() {
        try {
            await this.application?.commands.set(this.commandsArray);
            setInterval(async () => {
                await this.application?.commands.set(this.commandsArray);
            }, 5000);

            logger.success("Successfully reloaded application (/) commands.");
        } catch (error) {
            logger.error("Failed to deploy commands");            
        }
    }

    public async start() {
        await this.login(process.env.BOT_AUTH_TOKEN);
        connectDB();
    }
}