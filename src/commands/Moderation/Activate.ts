import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient, { toggleableGroupActions } from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'activate',
            aliases: ['act'],
            description: 'activate certain features on group-chats',
            category: 'moderation',
            usage: `${client.config.prefix}activate [events | mod | safe | nsfw | cmd | invitelink]`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const type = joined.trim().toLowerCase() as toggleableGroupActions
        if (!Object.values(toggleableGroupActions).includes(type))
            return void M.reply(`🟥 𝕡𝕖𝕣𝕧𝕖𝕣𝕥 𝕚𝕟𝕧𝕒𝕝𝕚𝕕 𝕠𝕡𝕥𝕚𝕠𝕟: *${this.client.util.capitalize(type)}*`)
        const data = await this.client.getGroupData(M.from)
        if (data[type]) return void M.reply(`🟨 *${this.client.util.capitalize(type)}* 𝕠𝕡𝕖𝕟 𝕪𝕠𝕦𝕣 𝕖𝕪𝕖𝕤 𝕓𝕒𝕜𝕒 *activated, 𝕓𝕤𝕕𝕜!*`)
        await this.client.DB.group.updateOne({ jid: M.from }, { $set: { [type]: true } })
        return void M.reply(`🟩 *${this.client.util.capitalize(type)}* 𝓸𝓷 𝓪𝓽 𝔂𝓸𝓾𝓻 𝓬𝓸𝓶𝓶𝓪𝓷𝓭 𝓫𝓪𝓫𝓮`)
    }
}
