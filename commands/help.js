const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "simple help command",

    async run (bot, message, args) {

        const help = new Discord.MessageEmbed()
        .setColor("#ffffff")
        .setTitle('🎪Những lệnh của bot!')
        .addFields({
            name: 'Prefix `,`',
        },
        {
            name: 'Info',
            value: '`ping`',        
        },
        {
            name: 'Fun',
            value: '`8ball` | `howgay` | `meme` | `rps`',
        },
        {
            name: 'Moderation',
            value: '`kick` | `ban` | `unban`',        
        },
        {
            name: 'Music',
            value: '`play` | `skip` | `stop`',
        },)

        message.channel.send(help)
    }
}