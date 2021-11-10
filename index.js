const Discord = require('discord.js');
const bot = new Discord.Client();
const { token } = require('./config.json');
const { readdirSync, read } = require('fs');
const { join } = require('path');
const config = require('./config.json');
bot.config = config;

bot.commands = new Discord.Collection();

const prefix = ',';
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const  command = require(join(__dirname, "commands", `${file}`));
    bot.commands.set(command.name, command);
}

bot.on("error", console.error);

bot.on('ready', () => {
    console.log(`${bot.user.username} </>`);

    const arrayOfStatus = [
        `${bot.guilds.cache.size} server!`,
        `Prefix is: ','`,
        `Khanh dep trai`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status)
        bot.user.setActivity(status, { type: 'WATCHING' }).catch(console.error)
        index++;
    }, 3000)
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(!bot.commands.has(command)) return;

        try {
            bot.commands.get(command).run(bot, message, args);
        } catch (error){
            console.error(error);
        }
    }
})

bot.login(token);