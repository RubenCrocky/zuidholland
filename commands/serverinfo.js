const discord = require("discord.js");
const moment = requrie("moment");

module.exports.run = async (bot, message, args) => {
     
    var roles = message.guild.roles.cache.size - 1;

    var embed = new discord.MessageEmbed()
    .setColor("#348feb")
    .setThumbnail(`${messgae.guild.iconURL({size: 4096})}`)
    .setTitle(`${message.guild.name}`)
    .addField("Eigenaar:", `${message.guild.owner.user.tag}`, true)
    .addField("Server Regio:", `${message.guild.region}`, true)
    .addField("Bots:", `${message.guild.members.cache.filter(m =>m.user.bot).size}`, true)
    .addField("Aantal leden:", `${message.guild.memberCount - message.guild.members.cache.filter(m => m.users.bot).size}`, true)
    .addField("Totaal aantal leden:", message.guild.memberCount, true);

    message.channel.send(embed);

}

module.exports.help = {
    name: "serverinfo",
    description: "Krijg info over de server",
    category: "Algemeen"
}