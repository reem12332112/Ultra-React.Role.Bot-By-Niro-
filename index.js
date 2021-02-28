const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const fs = require('fs')
require('dotenv').config()
const client = new DiscordJS.Client()

client.on('ready', () => {

    new WOKCommands(client, {
            commandsDir: 'commands',
            featureDir: 'data',
            showWarns: false,
        })
        .setMongoPath("mongodb+srv://reactrolebot:botbyniro@cluster0.pgje8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        .setDefaultPrefix(process.env.PREFIX)
})

fs.readdir('./events/', (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.on('message', async(message) => {
    if (message.author.bot || message.channel.type == "dm") return;
    if (message.content.startsWith(process.env.PREFIX + "dev")) {
        message.channel.send(new MessageEmbed().setAuthor("🔧 Developer Info", ).setColor("BLUE").setFooter("Request By " + message.author.tag).setTimestamp().addFields({
            name: "**👨‍💻 Developer Name**",
            value: "**@ニロ#3892​​​​**",
            inline: true
        }, {
            name: "**🛠 Bot Suppoer Server**",
            value: "** [Click Here](https://discord.gg/naar) **",
            inline: true
        }, {
            name: "**🎏 Glitch Page**",
            value: "** [Click Here](https://glitch.com/@NIR0) **",
            inline: true
        }, {
            name: "**📠 Github Page**",
            value: "** [Click Here](https://github.com/NIR0-V) **",
            inline: true
        }, {
            name: "**🎇 Replit Page**",
            value: "** [Click Here](https://repl.it/@NIR0) **",
            inline: true
        }, {
            name: "**🎗 Youtube Channel**",
            value: "** [Click Here](https://www.youtube.com/channel/UC7QtAaqlUhBmMojJISSLJkg) **",
            inline: true
        }))
    }
})

client.login(process.env.TOKEN)