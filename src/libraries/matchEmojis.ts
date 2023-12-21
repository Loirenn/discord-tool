import { EmojiRegex } from '../emojiRegex';

export function MatchEmojis(text: string) {
    const normalEmojis = EmojiRegex();
    const guildEmojis = /<a?:[a-zA-Z0-9_]+:[0-9]+>/g;
    const result: string[] = [];

    if (text.match(normalEmojis)) {
        result.push(...text.match(normalEmojis) as string[]);
    };

    if (text.match(guildEmojis)) {
        result.push(...text.match(guildEmojis) as string[]);
    };

    return result;
};