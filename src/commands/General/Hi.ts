/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/Lamvbbk-XRUAAAPo/iron-man2-tony-stark.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🅟🅔🅡🅥🅔🅡🅣 🅣🅗🅔🅢🅔 🅓🅐🅨🅢. 🅤🅢🅔 🅢🅞🅜🅔 🅑🅡🅐🅘🅝 🅢🅣🅤🅟🅘🅓 *${this.client.config.prefix}🅣🅨🅟🅔 🅗🅔🅛🅟* 🅜🅕. \n`,
			}
		);
	};
}
