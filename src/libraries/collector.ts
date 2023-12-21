import { ICollector } from "../interfaces";
import { Message, MessageComponentInteraction, MessageChannelCollectorOptionsParams, CommandInteraction, TextChannel } from "discord.js";

export class Collector {
    public channel: ICollector['channel'];
    public message: ICollector['message'];
    public componentType: ICollector['componentType'];
    public options: ICollector['options'];

    constructor(channel: ICollector['channel'], message: ICollector['message'], componentType: ICollector['componentType'], options?: ICollector['options']) {
        this.channel = channel;
        this.message = message;
        this.componentType = componentType;
        this.options = options;
    };

    public async run() {
        // ...
    };

    public async end() {
            
    };
};