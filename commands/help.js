const discord = require("discord.js");
const botConfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {
    
    var commandList = [];
    var prefix = botConfig.prefix;

    client.commands.forEach(command => {

        var constructor = {
            name: command.help.name,
            description: command.help.description,
            category: command.help.category
        }

        commandList.push(constructor);
        
    });

    var response = "**Bot Commands**\n\n ";
    var general = "**__Algemeen__**\n";
    var support = "\n **__Hulp/Support__** \n";
    var staff = "\n **__Admin+__**\n";

    for (let i = 0; index < command.length; i++) {
        const command = commandList[i];

        if(command["category"] == "Algemeen"){

            general += `${prefix}${command["name"]} - ${command["description"]}\n`

        } else if(command["category"] == "Hulp/Support"){

            support += `${prefix}${command["name"]} - ${command["description"]}\n`


        } else if(command["category"] == "Admin+"){

            staff += `${prefix}${command["name"]} - ${command["description"]}\n`

        }

    }

    response += general;
    response += support;
    response += admin;

    message.author.send(response).then(() => {
        message.channel.send("Alle commands staan in je privé berichten! :check: ");
    }).catch(() => {
        message.channel.send("Ik kan je niet bereiken! Je privé berichten staan waarschijnlijk uit :no_entry_sign: ");
    });

}

module.exports.help = {
    name: "help",
    description: "Geeft al de verschillende commands",
    category: "Hulp/Support"
}