// const Discord = require("discord.js");
/*
    const client = new Discord.Client();
    // Client is a JS Object whick connect's itself to Discord's API to run the bot
    -> This code worked before DiscordJS 14, but below code is more apt code as from DiscordJS 14, we need to specify the intent of our bots as well.
*/

require('dotenv').config()
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
// Create a new client instance

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("ready", replyMsg);
function replyMsg() {
  console.log("Hey All");
}

client.on("messageCreate", gotMsg);
function gotMsg(msg) {
  console.log(msg.content);
  if(msg.content === 'hey bot') {
    msg.reply("hey friend!")
  }
}

// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);
// Authenticate the Bot