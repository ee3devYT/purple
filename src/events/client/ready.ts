import logger from '../../utils/helpers'
import {client} from '../../index'
import { OAuth2Scopes } from 'discord.js'

client.once('ready', async () => {
    logger.success(`Logged in as highlight(${client.user?.tag})!`)
})