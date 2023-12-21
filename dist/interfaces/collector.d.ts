import { CommandInteraction, Message, ComponentType, MessageChannelCollectorOptionsParams } from "discord.js";
export interface ICollector extends MessageChannelCollectorOptionsParams<any> {
    channel: CommandInteraction["channel"] | Message["channel"];
    message: Message;
    componentType: ComponentType;
    options?: {
        time?: number;
        ended?: {
            message?: string;
        };
        isPublic?: boolean;
    };
}
