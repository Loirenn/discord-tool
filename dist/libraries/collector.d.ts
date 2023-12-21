import { ICollector } from "../interfaces";
export declare class Collector {
    channel: ICollector['channel'];
    message: ICollector['message'];
    componentType: ICollector['componentType'];
    options: ICollector['options'];
    constructor(channel: ICollector['channel'], message: ICollector['message'], componentType: ICollector['componentType'], options?: ICollector['options']);
    run(): Promise<void>;
    end(): Promise<void>;
}
