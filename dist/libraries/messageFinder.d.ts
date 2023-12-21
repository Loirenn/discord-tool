import { Message } from "discord.js";
export declare function MessageFinder(message: Message, content: string, options?: {
    caseSensitive?: boolean;
    limit?: number;
    include?: boolean;
}): Promise<Message[]>;
