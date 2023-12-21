import { UserFlags, UserFlagsBitField } from "discord.js";

export function GetFlags(flags: UserFlagsBitField | null) {
    const flagsArray: string[] = [];
    for (const flag in UserFlags) {
        if (flags.has((flag as unknown) as UserFlagsBitField)) {
            flagsArray.push(flag);
        };
    };

    return flagsArray;
};