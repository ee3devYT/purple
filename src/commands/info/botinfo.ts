import { client } from "../../index";
import { EmbedBuilder, SlashCommandBuilder } from "discord.js";

export default new client.command({
    structure: new SlashCommandBuilder()
        .setName("bot")
        .setDescription("Get information about the bot.")
        .addSubcommand(
            subcommand => subcommand
            .setName("information")
            .setDescription("Get information about the bot.")
        ),
    run: async (client, interaction) => {
        const name = `${client.user?.username}`;
        const iconURL = client.user?.displayAvatarURL();

        const embed = new EmbedBuilder()
            .setAuthor({ 
                name,
                iconURL,
            })
            .setColor("Blurple")
            .setDescription(`🤖 Welcome to our all-in-one Discord bot! Our bot is packed with a variety of features to enhance your server's experience. Whether you're looking for powerful 🛡️ moderation tools to maintain a safe environment, 🎶 music commands to groove to your favorite tunes, or fun games and activities 🎮 to keep your members entertained, our bot has it all.\n\nAnd that's not all! For anime enthusiasts 🍙, we have special anime-related commands to quench your anime thirst. We're dedicated to bringing you the best in Discord bot technology, and our bot is regularly updated with exciting new features and improvements. So, why wait? Invite our bot to your server today and unlock a world of possibilities! 🚀`)
            

            interaction.reply({ embeds: [embed] })
    },
});
