const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
    if(command === `${prefix}close`){
        const categoryID= "743422426339344405";

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Jij kan dit niet doen! Je hebt de `MANAGE_MESSAGES` permissie nodig.");
    
        if(message.channel.parentID == categoryID){
            message.channel.delete();
        } else {
    
            message.channel.send("Gelieve dit command te doen bij een ticket!");
    
        }
    
        var embedCreateTicket = new discord.MessageEmbed()
        .setTitle("Ticket, " + message.channel.name)
        .setDescription("Het ticket is gemarkeerd als **compleet**.")
        .setFooter("Ticket gesloten");
    
        //Logging channel
        var ticketChannel = message.member.guild.channels.cache.find(channel => channel.name === "ticket-log");
        if(!ticketChannel) return message.reply("Kanaal bestaat niet");
    
        ticketChannel.send(embedCreateTicket);
    
    }
}

module.exports.help = {
    name: "close",
    description: "Hiermee kan support team jou ticket closen.",
    category: "Hulp/Support"
}