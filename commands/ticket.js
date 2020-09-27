const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
        const categoryID= "743422426339344405";
    
        var username = message.author.username;
        var userDiscriminator = message.author.discriminator;
    
        var ticketBestaat = false;
    
        message.guild.channels.cache.forEach(channel => {
          
            if(channel.name == username.toLowerCase() + "-" + userDiscriminator) {
                ticketBestaat = true;
    
                message.reply("Je hebt al een ticket aangemaakt");
    
                return; 
            }
    
        });
    
        if(ticketBestaat) return;
    
        var embed = new discord.MessageEmbed()
        .setTitle("Hoi" + message.author.username)
        .setFooter("Support kanaal woordt aangemaakt");
    
        message.channel.send(embed)
    
        message.guild.channels.create(username.toLowerCase() + "-" + userDiscriminator, {type: 'text'}).then(
            (createdChannel) => {
                createdChannel.setParent(categoryID).then(
                    (settedParent) => {
    
                        settedParent.updateOverwrite(message.guild.roles.cache.find(x => x.name === `@everyone`),{
                            SEND_MESSAGES: false,
                            VIEW_CHANNEL: false
                        });
    
                        settedParent.updateOverwrite(message.author.id,{
                        CREATE_INSTANT_INVITE: false,
                        READ_MESSAGES: true,
                        SEND_MESSAGES: true,
                        ATTACH_FILES: true,
                        CONNECT: true,
                        ADD_REACTIONS: true,
                        VIEW_CHANNEL: true,
                        READ_MESSAGE_HISTORY: true
                        });
    
                        var embedParent = new discord.MessageEmbed()
                        .setTitle(`Hoi ${message.author.username}`)
                        .setDescription("Zet hier je vraag/bericht. Tag niemand!")
    
                        settedParent.send(embedParent);
    
                    }
                ).catch(err => {
                    message.channel.send("Er iets fout gegaan.");
                });
            }
        ).catch(err => {
            message.channel.send("Er iets fout gegaan.");
        });
    
}

module.exports.help = {
    name: "ticket",
    description: "Maak een ticket aan",
    category: "Hulp/Support"
}