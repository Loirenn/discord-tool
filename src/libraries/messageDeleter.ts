import { Message } from "discord.js";

export function DeleteMessage(message: Message, time: number) {
    setTimeout(() => {
        message.delete();
    }, time);
};