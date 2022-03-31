import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'moba',
            description: 'Displays info about Miku.',
            category: 'general',
            usage: `${client.config.prefix}miku`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/220bee3f0e1665a4980a1.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Hey I'm Miku. 16 years and  I love Girls with glasses...
            
📫𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/919711054140

⭕ⓞⓝⓦⓔⓡ ⓘⓝⓢⓣⓐ;
https://instagram.com/falling_1392005

📮ⓑⓞⓣ ⓘⓝⓢⓣⓐ;
https://instagram.com/_mobasshirachaudhary_

🚀ⓨⓞⓤⓡ ⓛⓞⓥⓘⓝⓖ;
🄼🄾🄱🄰 🄵🄾🄻🄻🄾🅆 🄼🄴 🄾🄽 🄸🄽🅂🅃🄰

𝓪𝓻𝓪 𝓪𝓻𝓪😉✨` }
        )
    }
}
