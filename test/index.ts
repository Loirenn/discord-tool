/*import { DeleteMessage, keyGenerator, MessageFinder, MatchEmojis, CheckInvite, CheckURL, GetFlags, Color, AntiCrash } from '../src';
import { Client, GatewayIntentBits, TextChannel } from 'discord.js';

console.log(
    MatchEmojis('😀 😃 😄 😁 😆 😅 😂 🤣 🥲 🥹 ☺️ 😊 😇 🙂 <:icon_vawe:1009457783168573491> qweqweweasdf'),
    CheckInvite('https://discord.gg/super_magic_url https://discord.gg/partnerbot aasdfasfs'),
    CheckURL('qwfqwqwf'),
);


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageReactions,
    ],
});

new AntiCrash(client);

client.on('ready', () => {
    console.log('Ready!');
});

client.on('messageCreate', async (message) => {
    if (message.content === 'test_dpr') {
        if (message.author.bot) return;
        await (message.channel as TextChannel).send('dpr').then(msg => DeleteMessage(message, 4000));
    };

    if (message.content === 'test_messageFinder') {
        if (message.author.bot) return;
        const msg = await MessageFinder(message, 'test', { limit: 10, caseSensitive: true, include: true });
        console.log(msg);
    };
});

client.login('what u are looking for is not here');*/