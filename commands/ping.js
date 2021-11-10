const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Độ trễ của bot",

    async run (bot, message, args) {

        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${bot.ws.ping} ms\``);

        message.channel.send(ping)
    }
}