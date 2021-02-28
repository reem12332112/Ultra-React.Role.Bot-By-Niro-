const { MessageEmbed } = require('discord.js')

module.exports = {
    callback: async({ message }) => {
        if (!message.channel.guild) return;
        if (message.author.bot) return;
        var msg = `${Date.now() - message.createdTimestamp}`;
        var api = `${Math.round(client.ws.ping)}`;
        message.channel.send(new MessageEmbed().setColor('00e8ff')
            .setAuthor(message.author.username, message.author.avatarURL())
            .setColor("00fff7")
            .addField("**Time Taken:**", msg + " ms 📶 ", true)
            .addField("**WebSocket:**", api + " ms 📶 ", true)
            .setTimestamp()
            .setFooter(`Request By ${message.author.tag}`))
    }
}