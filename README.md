![npm](https://img.shields.io/npm/v/discord-tool?label=npm&style=for-the-badge)
![npm](https://img.shields.io/npm/dt/discord-tool?style=for-the-badge)

[Need help? Contact me on Discord.](https://discord.gg/partnerbot)
<br /><br />

# Installation
```shell
npm i --save discord-tool
yarn add discord-tool
```

# AntiCrash
```js
const { AntiCrash } = require('discord-tool'); // CJS
import { AntiCrash } from 'discord-tool'; // ESM

new AntiCrash(client /* Discord.Client */);

// Tips:
/*
You can use this to prevent your bot from crashing. In short, the bot does not shut down when it gives an error.
*/
```

# Message Deleter
```js
const { DeleteMessage } = require('discord-tool'); // CJS
import { DeleteMessage } from 'discord-tool'; // ESM

await channel.send('dpr').then(msg => DeleteMessage(message /* Discord.Message */, 4000));
```

# Advanced Message Finder
```js
const { MessageFinder } = require('discord-tool'); // CJS
import { MessageFinder } from 'discord-tool'; // ESM

await MessageFinder(message /* Discord.Message */, 'content', { limit: 10, caseSensitive: true, include: true });

// Tips:
/*
if include is false, it will return the message that doesn't include the content.
if caseSensitive is false, it will return the message that doesn't include the content with case insensitive.
*/
```

# Get User Flags
```js
const { GetFlags } = require('discord-tool'); // CJS
import { GetFlags } from 'discord-tool'; // ESM

GetFlags(message.author.flags /* Discord.UserFlagsBitField | null */);

// Output: [ 'HypeSquadOnlineHouse3', 'ActiveDeveloper' ]
```

# Random
```js
const { Random } = require('discord-tool'); // CJS
import { Random } from 'discord-tool'; // ESM

Random.number(1 /* Min */, 10 /* Max */); // Output: 5
Random.array(['l', 'o', 'i', 'r', 'e', 'n']); // Output: 'i'
```

# Match Emojis
```js
const { MatchEmojis } = require('discord-tool'); // CJS
import { MatchEmojis } from 'discord-tool'; // ESM

MatchEmojis('developed by loiren 👍 <a:nice_emoji:1171093533831200798>'); // Output: ['👍', '<a:nice_emoji:1171093533831200798>']
```

# Check URL Validity
```js
const { CheckURL } = require('discord-tool'); // CJS
import { CheckURL } from 'discord-tool'; // ESM

CheckURL('https://loiren.now.sh'); // Output: true
CheckURL('loiren'); // Output: false
```

# Check Invite URL Validity
```js
const { CheckInvite } = require('discord-tool'); // CJS
import { CheckInvite } from 'discord-tool'; // ESM

CheckInvite('https://discord.gg/partnerbot'); // Output: true
CheckInvite('https://loiren.now.sh'); // Output: false
```

# Colors
```js
const { Colors } = require('discord-tool'); // CJS
import { Colors } from 'discord-tool'; // ESM

Colors.Blank // This is a blank color.
```

<h4 align="center">Developed with 💙 by Loiren</h4>
<h6 align="center">This package was developed 1 year ago.</h6>