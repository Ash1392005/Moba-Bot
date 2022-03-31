import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://c.tenor.com/pPf2nJJAZZYAAAPo/robert-downey-jr-rdj.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: `🄺🅈🄰 🄰🄿🄺🄴 🄿🄰🅂🅃🄴 🄼🄰🄸 🄽🄰🄼🄰🄺 🄷🄰🄸? *${this.client.config.prefix}🄰🄶🄰🅁 🄽🄰🄷🄸 🅃🄰🄱 🄷🄴🄻🄿 🄻🄸🄺🄷🄴* \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
