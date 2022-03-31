/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "alive",
                        aliases: ["Jinda?", "oi", "kahaho"],
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}alive`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/kjyeJAzCo60AAAPo/i-am-iron-man-robot.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Hai✌️, Hai✌️, \n\n abhi mara nahi hu. 🐋 \n`,
			}
		);
	};
}
