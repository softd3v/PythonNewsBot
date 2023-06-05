const Discord = require('discord.js');
const Parser = require('rss-parser');
const parser = new Parser();
const { Client, Intents } = require('discord.js');
const client = new Client({ 
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

  
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  if (message.content === '!rss') {
    const feed = await parser.parseURL('https://pythonguides.com/feed');
    feed.items.forEach((item) => {
      message.channel.send(item.title);
    });
  }
});

client.login('ee32f6b8b734e1c32520f33eaccb30a3502e54abd738d672e35264acdf496ed2');
