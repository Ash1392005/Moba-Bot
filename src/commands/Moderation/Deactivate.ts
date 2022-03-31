import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient, { toggleableGroupActions } from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'deactivate',
            aliases: ['deact'],
            description: 'deactivate certain features on group-chats',
            category: 'moderation',
            usage: `${client.config.prefix}deactivate [feature]`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const type = joined.trim().toLowerCase() as toggleableGroupActions
        if (!Object.values(toggleableGroupActions).includes(type))
            return void M.reply(`🟥 𝕨𝕙𝕠 𝕞𝕒𝕕𝕖 𝕪𝕠𝕦 𝕒𝕕𝕞𝕚𝕟: *${this.client.util.capitalize(type)}*`)
        const data = await this.client.getGroupData(M.from)
        if (!data[type]) return void M.reply(`🟨 *${this.client.util.capitalize(type)}* 𝕛𝕖𝕣𝕜 𝕠𝕡𝕖𝕟 𝕪𝕠𝕦𝕣 𝕖𝕪𝕖𝕤 *inactived*, 𝕓𝕒𝕜𝕝𝕠𝕝!`)
        await this.client.DB.group.updateOne({ jid: M.from }, { $set: { [type]: false } })
        return void M.reply(`🟩 *${this.client.util.capitalize(type)}* 𝕚 𝕒𝕞 𝕘𝕠𝕚𝕟𝕘 𝕕𝕠𝕨𝕟 𝕕𝕠𝕨𝕟 𝕚𝕟𝕒𝕔𝕥𝕚𝕧𝕖`)
    }
}
