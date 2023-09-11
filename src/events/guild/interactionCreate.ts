import {client} from '../../index'

client.on('interactionCreate', async (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const command = client.commands.get(interaction.commandName)
    try {
        command?.run(client, interaction)

        if(!command) return;

    } catch (error) {
        console.error(error)
    }
})