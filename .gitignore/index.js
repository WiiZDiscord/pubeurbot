const Discord = require('discord.js')
var bot = new Discord.Client();
var prefix = ('p.')
var clientDiscord = new Discord.Client();
const fs = require('fs')
var randnum = 0;

bot.login(process.env.TOKEN)


bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'p.help | PubeurBot', type: 0 }});
    console.log('Bot connecté avec succès !');
});

bot.on('guildMemberAdd', member => {
    bot.channels.get("478986556158377986").send("Bienvenue sur __Test Bot__ " + member.user.username);
    //logs
    //bot.channels.get("478913484436799497").send(member.user.username + " __**Vient de rejoindre le serveur**__")
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send(`__Bienvenue__ ${member.user.username} sur **Pubeur Pro**, je suis *PubeurBot*\n Fait p.help pour afficher mes commandes\n \nBot développé par WiiZ#9939`);
    }).catch(console.error)
});

bot.on('message', message => {
	if(message.content === prefix + "test"){
	var help_embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.addField('test')
		.setFooter('Developped by WiiZ')
		message.channel.sendEmbed(help_embed);
	}
})

bot.on('guildMemberRemove', member => {
	bot.channels.get('478986556158377986').send(`__Aurevoir__ ${member.user.username} :cry:`)
})
//Bienvenu(e) dans Pubeur Pro je suis le bot de Pubeur Pro fait p.help pour avoir toute les informations sur moi ! Mon codeur est LolkillV

bot.on('message', message => {

	let msg = message.content.toLowerCase();
	let args = message.content.slice(prefix.length).trim().split(' ');
	let command = args.shift().toLowerCase();
	let say = args.join(' ');

	if(command === 'say') {
  if(!args[0]) return message.channel.send("Veuillez introduire un texte ! Ex p.say Hey, je m'appelle PubeurBot, mon codeur est WiiZ");
		var help_embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.addField(`Message de @${message.author.tag}`, say)
		message.channel.sendEmbed(help_embed)

		message.delete();
	}
})


bot.on('message', message => {
	if(message.content === prefix + 'help'){
	var help_embed = new Discord.RichEmbed()
		.setColor('#F4FF3A')
		.addField("Infos", "p.info Affiche les infos du bot\np.si Affiche les infos du serveur")
		.addField("Modération", "p.say Effectue un broadcast\np.support Lien vers le serveur support\np.divers Affiche les commandes *fun*\np.antiraid Affiche un lien vers un serveur Anti-Raid")
		.setFooter("D'autres commandes en développement | Developped by Codeur WiiZ.")
		message.channel.sendEmbed(help_embed);
	}
})

bot.on('message', message => {
	if(message.content === prefix + 'info'){
		var help_embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setTitle('Voici les infos concernant le bot')
		.addField('Nom du bot', '**PubeurBot**')
		.addField('Version du bot', '1.0 | *En développement*')
		.addField('Créateur du bot', '**WiiZ#9939**')
		.addField('Serveur(s) du bot', "*PubeurPro V.2*")
		.setFooter(`developped by |Codeur| WiiZ | LolkillV2#9939 | Message created at ${message.createdAt}`)
		message.channel.sendEmbed(help_embed);
	}
})

bot.on('message', message => {
	if(message.content === prefix + 'support'){
		var help_embed = new Discord.RichEmbed()
		.setColor('#DB1702')
		.setTitle('Besoin de support ?')
		.addField("Voici le lien de support", "[Clique Ici](https://discord.gg/rpaMAAt)", true)
		message.channel.sendEmbed(help_embed);
	}
})

bot.on('message', message => {
	if(message.content === prefix + 'si'){
		let sicon = message.guild.displayAvatarURL;
		var help_embed = new Discord.RichEmbed()
		.setColor("#e80606")
		.setDescription("Infos du Serveur")
		.setThumbnail(sicon)
		.addField("Nom du serveur", message.guild.name)
		.addField("Crée le", message.guild.createdAt)
		.addField("Nombres de membres", message.guild.memberCount)
		.addField('Tu as rejoins le', message.member.joinedAt)
		.setFooter("Dev by WiiZ")
		message.channel.sendEmbed(help_embed);
	}
})

bot.on('message', message => {
	if(message.content === "snif"){
		message.reply(":cry: *snif*")
	}
})

bot.on('message', message => {
	if(message.content === 'mdr'){
		message.reply("C'est drôle hein ! :expressionless:")
	}
})

bot.on('message', message => {
	if(message.content === 'chat'){
		message.reply(":cat2: Il est mignon ce chat !")
	}
})

bot.on('message', message => {
	if(message.content === 'chien'){
		message.reply(":dog: Mais quel beau chien !")
	}
})

bot.on('message', message => {
	if(message.content === 'xD'){
		message.reply("Pfff... Qui dit encore **xD** en 2018.. :expressionless:")
	}
})

bot.on('message', message => {
	if(message.content === prefix + 'divers'){
		var help_embed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle("Commandes Fun")
		.addField("Liste des commandes *fun*", "snif - Le bot répond\nmdr - Le bot répond\np.blague Cette commande fonctionne comme ceci p.blague1 p.blague2,... Jusqu'à 5\nxD - Le bot répond\nchat - Le bot répond\nchien - Le bot répond\np.roi - Tu demande au bot si tu es son roi\np.xp Affiche votre nombre d'xp ")
		message.channel.sendEmbed(help_embed);
	}
})

bot.on('message', message => {
  if(message.content === 'p.blague1'){
  message.reply("Un monsieur visite un musée. Soudain il s'arrête et dit au guide :\n- Ah, c'est moche !\n- C'est du Picasso, répond le guide.\n Plus loin, il s'écrie de nouveau :\n - Ah, c'est vraiment moche !\n - Ca Monsieur, c'est un miroir !")
  }
})

bot.on("message", message => {
  if(message.content === 'p.blague2'){
    message.reply("Un fils demande à son père :\n- Papa,c'est quoi la beauté?\n- Tu vois ta mère ?\n- Oui\n- Et ben c'est pas ça!")
  }
})

bot.on('message', message => {
  if(message.content === 'p.blague3'){
    message.reply("Un gars dit à un autre dans un troquet :\n- T'es con toi ! T'es vraiment con ! C'est pas possible ce que t'es con ! J'ai jamais vu un con pareil ! Tiens, c'est simple, s'il existait un concours de cons, tu finirais deuxième !\n - Pourquoi deuxième ?\n- Parce que t'es trop con pour finir premier !")
  }
})

bot.on('message', message => {
  if(message.content === 'p.blague4'){
    message.reply("T'as vraiment cru qu'il y avait une 4ème blague ?, c'est long de faire ca tu sais ! J'apprendrais plus de blagues quand j'aurais envie !")
  }
})

bot.on('message', message => {
  if(message.content === prefix + 'blague5'){
    message.reply("Je t'ai dit quoi ? :expressionless:")
  }
})

bot.on('message', message => {
  if(message.content === prefix + 'roi'){
  var help_embed = new Discord.RichEmbed()
    .setColor("#f2ff00")
    .setTitle(`Es-tu mon roi @${message.author.tag} ?`)
    .addField("Réponse", "C'est moi ton roi petit :ok_hand:")
    message.channel.sendEmbed(help_embed)
  }
})

//test de BAN



  bot.on('message', message => {
    if(message.content[0] === prefix){
      let spliteMessage = message.content.split(" ");
      if(spliteMessage[0] === 'p.test') {
        message.channel.send('.');
        message.author.createDM().then(channel => {
          channel.send('...');
        }).catch(console.error);
        bot.channels.get("478993357637550107").send("Commande de " + message.author.tag);

      }
      else if(spliteMessage[0] === 'p.test2') {
        if(spliteMessage.length === 2) {
          message.channel.send("'ERREUR, nan j'deconne" + spliteMessage[1]);

        }
        else
          message.reply('ERRRRRRRREUUUUUUUR');
      }
      else if(spliteMessage[0] === 'p.ban') {
        if(spliteMessage.length === 2) {
          message.guild.ban(message.mentions.users.first());
        }
        else
          message.reply('ERREUR DANS LE BAN')
      }
    }
  });

  //test

  bot.on('message', message => { 
 
 
  var userData = JSON.parse(fs.readFileSync('./userData.json', 'utf-8'));
  var sender = message.author;
  var msg = message.content.toUpperCase();
  
  if(message.content === 'p.xp') {
 	message.channel.send(`Votre nombre d'xp : **${userData[sender.id].messagesSent}**`)
}
 
 
if (!userData[sender.id]) userData[sender.id] = {
    messageSent: 0
}
 
userData[sender.id].messagesSent++;
 
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
    if (err) console.error(err);
});
 
});



bot.on('message', message => {
  if(message.content === prefix + 'antiraid'){
  var help_embed = new Discord.RichEmbed()
    .setColor("#4286f4")
    .setTitle(`Voici un lien vers une team Anti-raid`)
    .addField("Voici le lien", "[Clique Ici](https://discord.gg/W4S7UbU)", true)
    message.channel.sendEmbed(help_embed)
  }
})
