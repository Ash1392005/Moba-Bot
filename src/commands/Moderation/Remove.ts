import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            aliases: ['bye'],
            command: 'remove',
            description: 'removes the mentioned users',
            category: 'moderation',
            usage: `${client.config.prefix}remove [@mention | tag]`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        let text = '*Action*\n\n'
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
            return void M.reply(`𝕓𝕒𝕓𝕪 𝕞𝕒𝕜𝕖 𝕞𝕖 𝕒𝕕𝕞𝕚𝕟 𝕗𝕚𝕣𝕤𝕥 𝕥𝕙𝕖𝕟 𝕨𝕖 𝕨𝕚𝕝𝕝 𝕥𝕒𝕝𝕜 𝕠𝕜?`)
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        if (!M.mentioned.length) return void M.reply(`Tag the users you want to ${this.config.command}`)
        M.mentioned.forEach(async (user) => {
            // const usr = this.client.contacts[user]
            // const username = usr.notify || usr.vname || usr.name || user.split('@')[0]
            if (M.groupMetadata?.owner.split('@')[0] === user.split('@')[0]) {
                text += `✖ Skipped *@${user.split('@')[0]}* as 𝕥𝕙𝕖𝕪'𝕣𝕖 𝕪𝕠𝕦𝕣 𝕞𝕒𝕚𝕓𝕒𝕒𝕡.\n`
            }
            // check if user is Bot
            else if (this.client.user.jid === user) {
                text += `✖ Skipped *@${user.split('@')[0]}* as they're me.\n`
            } else {
                text += `🟥 𝕟𝕚𝕜𝕒𝕝 𝕕𝕚𝕪𝕒 𝕤𝕙𝕒𝕟𝕥 𝕓𝕠𝕚𝕤 𝕚 𝕒𝕝𝕣𝕖𝕒𝕕𝕪 𝕗𝕦𝕜 𝕙𝕚𝕞 𝕠𝕣 𝕙𝕖𝕣 *@${user.split('@')[0]}*\n`
                await this.client.groupRemove(M.from, [user])
            }
        })
        await M.reply(`${text}`, undefined, undefined, [...M.mentioned, M.sender.jid])
    }
}
