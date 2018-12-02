const Discord = require ('discord.js');

const client = new Discord.Client();

var prefix = "/";

client.login("NTExOTg2NDk4NDY0MTIwODM1.Dsy7Vg.GcOONDbhBCBlQlqUG4gPWHIbM6A");

client.on("ready", () => {
    console.log("Je suis prêt !")
    client.user.setGame("Emmerder Erwan");
});

client.on('message', message => {
    if(message.content === "!hi"){
        message.reply("Bonjour à toi");
        console.log('Le bot dit bonjour');
    }

    if(message.content === prefix + "jeu"){
        message.reply("voici le lien de mon petit jeu en ligne, https://monjeuweb.000webhostapp.com/");
        console.log('Le bot donne le lien du jeu en ligne');
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici mes commandes d'aides !")
        .addField("!hi", "Dit bonjour au bot" )
        .addField("!vote", "Pour créer un sondage." )
        .addField("/jeu", "Donne le lien de mon petit jeu en ligne")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide")
    }
     if (message.content.toLowerCase().startsWith("!vote")) {
        var embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle(`vote créé par ${message.author.username}`)
        .setDescription(message.content.slice(6));
        message.guild.channels.find("name", "sondage").send({embed}).then(message => {
        message.react("✅").then(() => message.react("❌"))
        console.log("Un utilisateur a effectué la commande de vote.")
            });
        }
    });
