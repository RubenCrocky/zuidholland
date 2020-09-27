const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
     
    var member = message.guild.member(message.mentions.users.first() || client.users.cache.get(args[0]));
    if(!member) member = message.member;

    var roles = member.roles.cache.size - 1;
    var roleNames = member.roles.cache.map(r => r).join(" ").replace("@everyone", "");
    if(roles == 0) roleNames = "Deze persoon heeft geen rollen.";

    var status = member.presence.status;

    var Nickname = member.nickname;
    if(!nickname == null || undefined) nickname = "Geen costum nickname!";

    var embed = new discord.MessageEmbed()
    .setColor("#348feb")
    .setThumbnail(member.user.displayavatarURL({size: 4096}))
    .setTitle(`${member.user.tag}`)
    .addField("ID", `${member.id}`, true)
    .addField("Bijnaam", nickName, true)
    .addField("Status", `${status}`, true)
    .addField("Game:", `${member.presence.activities[0] ? member.presence.activities[0].name: "Geen"}`, true)
    .addField("Account gemaakt", `${moment(member.user.createAt).format("LL")}`)
    .addField("Server gejoined:", `${moment(member.joinedAt).format("LL")}`)
    .addField("Rollen" `[${roles}]`, `${roleNames}`);

    message.channel.send(embed);



}

module.exports.help = {
    name: "userinfo",
    description: "Krijg informatie van een user.",
    category: "Algemeen"
}