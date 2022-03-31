import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'demote',
            description: 'demotes the mentioned users',
            category: 'moderation',
            usage: `${client.config.prefix}demote [mention | @tag]`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
            return void M.reply(`𝕔𝕙𝕦𝕔𝕙𝕦 𝕞𝕒𝕜𝕖 𝕞𝕖 𝕒𝕕𝕞𝕚𝕟 𝕗𝕚𝕣𝕤𝕥?`)
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        if (!M.mentioned.length) return void M.reply(`Tag the users you want to ${this.config.command}`)
        M.mentioned.forEach(async (user) => {
            const usr = this.client.contacts[user]
            const username = usr.notify || usr.vname || usr.name || user.split('@')[0]
            if (!M.groupMetadata?.admins?.includes(user)) M.reply(`✖ Skipped *${username}* as they're not an admin`)
            else if (user !== this.client.user.jid) {
                await this.client.groupDemoteAdmin(M.from, [user])
                M.reply(`➰ 𝕓𝕙𝕒𝕚 𝕓𝕒𝕟 𝕘𝕒𝕪𝕒 𝕒𝕕𝕞𝕚𝕟? 𝕚𝕟 𝕥𝕙𝕖 𝕟𝕒𝕞𝕖 𝕠𝕗 𝕪𝕠𝕦𝕣 𝕤𝕚𝕟 𝕚 𝕕𝕖𝕞𝕠𝕥𝕖 𝕪𝕠𝕦 *${username}*`)
            }
        })
    }
}
