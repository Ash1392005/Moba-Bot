import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    ♥️🅼🆈 🅳🅰🆁🅻🅸🅽🅶♥️\n\n*🎇ᗰOᗷᗩ support:🎇* *🄵🄾🄻🄻🄾🅆 🄼🄴 🄾🄽 🄸🄽🅂🅃🄰 https://instagram.com/_mobasshirachaudhary_*\n\n*💫🄾🅆🄽🄴🅁 🄸🄽🅂🅃🄰💫*:*🄸🄵 🅈🄾🅄 🄵🄰🄲🄴 🄰🄽🅈 🄿🅁🄾🄱🄻🄴🄼 🄼🅂🄶 🄼🄴  https://instagram.com/falling_1392005*`,
           MessageType.text
        ))
        const n = [
            'https://c.tenor.com/OWVr3gfSSC8AAAPo/kiss-tony-stark.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `ᗩᒪᖇEᗩᗪY ᖴIᒪᒪEᗪ YOᑌᖇ ᗪEᔕIᖇE ᗷᗩᗷE \n` }
        )

        }
}
