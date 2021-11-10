const Discord = require('discord.js');

module.exports = {
	name: 'clear',
    description: "Xóa tin nhắn",
	run: async (client, message, args) => {
		if (!message.member.permissions.has('MANAGE_MESSAGES')) {
			return message.channel.send(
				`Bạn không đủ quyền dùng lệnh này`,
			);
		}
		if (!args[0]) {
			return message.channel.send('nhập số tin nhắn muốn xóa');
		}

		let deleteAmount = parseInt(args[0], 10);

		if (Number.isNaN(deleteAmount)) {
			return message.channel.send('nhập số tin nhắn muốn xóa');
		}

		// could use ternary
		if (deleteAmount > 100) {
			deleteAmount = 100;
		} else {
			deleteAmount = parseInt(args[0], 10);
		}

		await message.channel.bulkDelete(deleteAmount, true);

		const embed = new Discord.MessageEmbed()
			.setTitle(`${message.author.username}`)
			.setDescription(`Đã xóa ${deleteAmount} tin nhắn`)
			.setFooter(message.author.username, message.author.displayAvatarURL())
			.setColor('#f2f2f2');
		return message.channel.send(embed);
	},
};