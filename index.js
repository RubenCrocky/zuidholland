const discord = require("discord.js");
const botConfig = require("./botconfig.json");
//command handler
const fs = require("fs");
const client = new discord.Client();

//command handler
client.commands = new discord.Collection();
//command handler
fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {
        console.log("Kon geen files vinden");
        return;
    }

    jsFiles.forEach((f,i) => {

        var fileGet = require(`./commands/${f}`);
        console.log(`De file ${f} is geladen`);

        client.commands.set(fileGet.help.name, fileGet);

    })

});

client.login(process.env.token);

client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Amsterdam Zuid V1", { type: "PLAYING" });
 
});
 
client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];

    //command handler
    var arguments = messageArray.slice(1); 
    
    var commands = client.commands.get(command.slice(prefix.length));

    if(commands) commands.run(client, message, arguments);
    


});