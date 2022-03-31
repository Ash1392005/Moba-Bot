/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "moba",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}yotsuba`,
			baseXp: 2000,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/4TLYvKWI2mgAAAPo/nakano-yotsuba-smile.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `᳡ *𝓶𝓸𝓫𝓪* ֍\n\n֍ *𝓲𝓶𝓹𝓸𝓻𝓽𝓪𝓷𝓽: 𝓘 𝓪𝓶 𝔀𝓱𝓪𝓽 𝔂𝓸𝓾 𝓷𝓮𝓮𝓭 𝓯𝓸𝓻 𝔂𝓸𝓾𝓻 𝔀𝓱𝓪𝓽𝓼𝓪𝓹𝓹 𝓫𝓪𝓴𝓪.*\n\n🌐 *ⓞⓕⓕⓘⓒⓐⓛ ⓘⓝⓢⓣⓐ:https://instagram.com/falling_1392005 * \n\n 📒 *ⓑⓞⓣ ⓘⓝⓢⓣⓐ:https://instagram.com/_mobasshirachaudhary_ * \n\n 👾 *ⓕⓐⓥ:🄸 🄼🄸🄶🄷🅃 🄴🄰🅃 🅈🄾🅄 🄰🄻🄸🅅🄴* \n`,
			}
		);
	};
}
