import { ChatInputCommandInteraction, ContextMenuCommandBuilder, SlashCommandBuilder, SlashCommandSubcommandsOnlyBuilder } from "discord.js";
import client from "../classes/client";
export interface Command {
    structure: SlashCommandBuilder | SlashCommandSubcommandsOnlyBuilder | Omit<SlashCommandBuilder, 'addSubCommand' | 'addSubCommandGroup'> | ContextMenuCommandBuilder,
    run: (client: client, interaction: ChatInputCommandInteraction) => Promise<void>
}