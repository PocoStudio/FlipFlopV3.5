const { Client, MessageEmbed, MessageActionRow, MessageButton, Guild, ClientApplication, MessageSelectMenu, Emoji, Interaction} = require('discord.js');

const { prefix, token } = require('./config.json');

const bot = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_BANS", "GUILD_MEMBERS", "GUILD_SCHEDULED_EVENTS"] });

const fs = require("fs");

var Money = 0


        // DEMARAGE BOT

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

bot.on('ready', () => {
  console.log('Démmarage  ...')
  setTimeout(() => { console.log("Bot mis en ligne avec succès !"); }, 1000);
  console.log(`${bot.user.username} : en ligne sur ${bot.guilds.cache.size} serveur(s) !`)
  Maj = (getRandomInt(6,2));
  const type = ""
  const statuses = [
  'f!ping',
  'te connaitre',
    'Visual Studio Code',
    'jouer avec P\'tit Poco Studio',
    'croire en ses rêves',
    'f!help',
    't\'imaginer, toi !'
]
let i = 0
    setInterval(() => {
      bot.user.setActivity(statuses[i], {type : 'PLAYING'})//À la place de WATCHING tu peux mettre PLAYING, COMPETING, LISTENING, STREAMING.
        i = ++i % statuses.length
    },  1e4);
    bot.user.setStatus("online");
});


        // VAR ET LET ET CONST

var Niveaux = 0
var SalonDeBienvenue
var Messagebienvenue = "Bienvenue à "
var salonlogs 
var Maj = ""
const ms = require('ms');
const { runMain } = require('module');
const { fstat } = require('fs');
const { Channel, channel } = require('diagnostics_channel');
const { constants, SlowBuffer } = require('buffer');
const { create } = require('domain');
let blacklist = ['fdp', 'ntm', 'connard', 'pute', 'putain', 'ta gueule', 'nique', 'salope', 'sale PD', 'batard', 'putin', 'enfoiré', 'connare', 'fils de pute', 
'bâtard', 'bicot', 'conasse', 'couille molle', 'ducon', 'dugland', 'enculé', 'fachiste', 'imbécile','sale Con','sale con',"conar",'couilles','couile','sale merde','bite','sal con'
,'bander','branlette','putain','zob','zigounette','couille','ta gueule','chiasse','conasse','conase','Conasse','SALE CON','CONNARD','CONAR','ENCULER','enculee','enculer','bâtard','bâtar','ducon','emmerdeuse']

var Goto = true
let foundInText = false;
const UserMap = new Map();
let Spammode = false
let Raidmode = false
var stop = ""
let AntiInsulte = false
var chan
var tiketuser
var LogsServeurSystème = false
const talkedRecently = new Set()
let f = 0

// A MODIFIER
const botId = "938830395078758431"
const botusername = "FlipFlop"
let SalonHacked = "950000050614960158"

        // COMMANDE MAJ

bot.on("messageCreate", async message => { 
  if (stop == "Stop") return 
else {
  const exampleEmbed = new MessageEmbed()
	    .setColor('#C27C0E')
	    .setTitle('Mis à Jour 3.5')
	    .setURL('https://sites.google.com/view/flipflopbot/accueil')
	    .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	    .setDescription('FlipFlop à été mis à jour V3.5 ')
    	.setThumbnail('https://www.abondance.com/wp-content/uploads/2015/06/google-algorithm-update.jpg')
	    .addFields(
		    // { name: '\u200B', value: '\u200B' },
        { name: 'Fix de Bug', value: 'Fix de nombreux bug récurrent.'},
	    	{ name: ' Nouvelles Commandes', value: '`f!setBot` et `f!énigme` ... Voir `f!help`', inline: false },
//	    	{ name: 'New Graphisme', value: 'Modefication Interne des graphisme', inline: false },
	)
  .setImage('https://www.rts.ch/2014/06/25/11/39/5959337.image?w=960&h=384')
	.setTimestamp()
	.setFooter({ text: 'Maj FlipFlop Version 3.2', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  message.channel.send({ embeds: [exampleEmbed] });
  stop = "Stop"
  console.log("MAJ n° " + Maj +" concluante")
}
});


       // Antiinsulte

bot.on("messageCreate", async message => { 
  if(AntiInsulte == true) {
    for(var i in blacklist) {
      if(message.content.toLocaleLowerCase().includes(blacklist[i].toLocaleLowerCase())) foundInText = true
    }
    {
    var individu = "<@!" +message.author.id + ">"
    if(message.author.id !== botId){
      if(foundInText){
        message.channel.send(`Molo sur les gros mots ${individu} !`)
        message.delete()
        foundInText = false
        //console.log(target)
        if(!message.member.permissions.has("ADMINISTRATOR")) {
        
          message.member.timeout(600000, "Insulte dans un salon textuel");
          const avatarEmbed = new MessageEmbed()
                .setColor('#E74C3C')
                .setTitle('TempMute User')
                .setDescription('TempMute par ' + botusername)
                .setThumbnail('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png')
                .addFields(
                  { name: 'Objet :', value: `L'utilisateur ${individu} à été mute pour 10 min.` },
                  { name: 'Raison :', value: "Insulte dans un salon textuel.", inline: false },
            )
              message.channel.send({ embeds: [avatarEmbed] });
          console.log(`L'utilisateur ${individu} est mute pendant 10 min`);
        }
      }
    }
  }
} 
});

       // Spammode

bot.on("messageCreate", async message =>{// commende spammode
  if (Spammode == true) {
    if(UserMap.get(message.author.id)) {
    
      const UserData = UserMap.get(message.author.id)
      const { lastMessage, timer} = UserData
      let difference = message.createdTimestamp - lastMessage.createdTimestamp;
      let msgCount = UserData.msgCount;

      if(difference > 3000) {

        clearTimeout(timer);
        UserData.msgCount = 1;
        UserData.lastMessage = message;

        UserData.timer = setTimeout(() => {

          UserMap.delete(message.author.id)

        }, 360000)

        UserMap.set(message.author.id, UserData)

      } else {

        msgCount++;

        if(msgCount >= 5) {
            if(message.author.id === botId) return console.log("--- Bot not spameur")
            if(f == 0) message.channel.send(`**Le spam n'est pas autorisé sur ce serveur** ${message.author} !`)
            if(f == 5) message.channel.send(`**Le spam n'est pas autorisé sur ce serveur** ${message.author} !`)
            f++
            if(f == 5) f= -2
            const messages = [...(await message.channel.messages.fetch({
              before: message.id,
            })).filter(msg => msg.author.id === message.author.id).values()]

            await message.channel.bulkDelete(messages);

        }else {

          UserData.msgCount = msgCount;
          UserMap.set(message.author.id, UserData)
        }
      }

    } else {

      let fn = setTimeout(async () => {

          UserMap.delete(message.author.id)
      }, 360000)

      UserMap.set(message.author.id, {

          msgCount: 1,
          lastMessage: message,
          timer: fn
        })
    }
  }
}
);


bot.on("messageCreate", async message =>{// commende check
  if(message.author.id == 839544555602706462){
    if(message.content.startsWith(prefix + "check")){
      message.channel.send(`${bot.user.username} : en ligne sur ${bot.guilds.cache.size} serveur(s) !`)
      message.channel.send(`Id du bot : ${botId}, Nom du bot : ${botusername}`)
      console.log(botId)
      console.log(botusername)
    }
  }
});

// SpamDMODE Mute

bot.on("messageCreate", async message =>{// commende spammode
  if (Spammode == true) {
    if(UserMap.get(message.author.id)) {
    
      const UserData = UserMap.get(message.author.id)
      const { lastMessage, timer} = UserData
      let difference = message.createdTimestamp - lastMessage.createdTimestamp;
      let msgCount = UserData.msgCount;

      if(difference > 3000) {

        clearTimeout(timer);
        UserData.msgCount = 1;
        UserData.lastMessage = message;

        UserData.timer = setTimeout(() => {

          UserMap.delete(message.author.id)

        }, 360000)

        UserMap.set(message.author.id, UserData)

      } else {

        msgCount++;

        if(msgCount >= 10) {
          if(message.member.moderatable){
            if(!message.member.permissions.has("MODERATE_MEMBERS"))
            message.member.timeout(600000, "Insulte dans un salon textuel");
            const avatarEmbed = new MessageEmbed()
              .setColor('#E74C3C')
              .setTitle('TempMute User')
              .setDescription('TempMute par ' + botusername)
              .setThumbnail('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png')
              .addFields(
                { name: 'Objet :', value: `L'utilisateur <@${message.author.id}> à été mute pour 10 min.` },
                { name: 'Raison :', value: "Spam excessif dans un salon textuel.", inline: false },
          )
            message.channel.send({ embeds: [avatarEmbed] });
            console.log(`L'utilisateur ${message.author.id} est mute pendant 10 min`);
            }


            const messages = [...(await message.channel.messages.fetch({
              before: message.id,
            })).filter(msg => msg.author.id === message.author.id).values()]

        }else {

          UserData.msgCount = msgCount;
          UserMap.set(message.author.id, UserData)
        }
      }

    } else {

      let fn = setTimeout(async () => {

          UserMap.delete(message.author.id)
      }, 360000)

      UserMap.set(message.author.id, {

          msgCount: 1,
          lastMessage: message,
          timer: fn
        })
    }
  }
}
);

       // SPAMMODE

bot.on("messageCreate", async message => { // commende Spammode On/Off
  if(message.content.startsWith(prefix + "spammode")){
    let msg = message.content.slice(11);
    if(!message.member.permissions.has("MODERATE_MEMBERS")) return message.channel.send(message.author.username + ` Vous n'avez pas les permission d'effectué cette commande ! `)
    if(!msg) return message.channel.send(`Merci de preciser On / Off ${message.author.username} !`)
    if(msg !== "On" && msg !== "Off") return message.channel.send(`Merci de renseigner les bonne valeur On/Off ${message.author.username} !`)
    else if(msg == "On") {
      Spammode = true
      message.channel.send(`Le spammode à été activer avec succès ! 🔒`)
      console.log("spam mode " + msg)
    }
    else if(msg == "Off") {
      Spammode = false
      message.channel.send(`Le spammode à été desactiver avec succès ! 🔓`)
      console.log("spam mode " + msg)
    }
    }
  });

// commende anti insulte On/Off
  bot.on("messageCreate", async message => { // commende anti insulte On/Off
    if(message.content.startsWith(prefix + "antiinsulte")){
      let msg = message.content.slice(14);
      if(!message.member.permissions.has("MODERATE_MEMBERS")) return message.channel.send(message.author.username + ` Vous n'avez pas les permission d'effectué cette commande ! `)
      if(!msg) return message.channel.send(`Merci de preciser On / Off ${message.author.username} !`)
      if(msg !== "On" && msg !== "Off") return message.channel.send(`Merci de renseigner les bonne valeur On/Off ${message.author.username} !`)
      else if(msg == "On") {
        AntiInsulte = true
        message.channel.send(`Le AntiInsulte à été activer avec succès ! 🔒`)
        console.log("spam mode " + msg)
      }
      else if(msg == "Off") {
        AntiInsulte = false
        message.channel.send(`Le AntiInsulte à été desactiver avec succès ! 🔓`)
        console.log("AntiInsulte " + msg)
      }
      }
    });

// commende Raidmode On/Off

  bot.on("messageCreate", async message => { // commende Raidmode On/Off
    if(message.content.startsWith(prefix + "raidmode")){
      let msg = message.content.slice(11);
      if(!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(message.author.username + ` Vous n'avez pas les permission d'effectué cette commande ! `)
      if(!msg) return message.channel.send(`Merci de preciser On / Off ${message.author.username} !`)
      if(msg !== "On" && msg !== "Off") return message.channel.send(`Merci de renseigner les bonne valeur On/Off ${message.author.username} !`)
      else if(msg == "On") {
        Raidmode = true
        message.channel.send(`Le raidmode est désormais activé ! 🔒`)
        console.log("Raidmode " + msg)
      }
      else if(msg == "Off") {
        Raidmode = false
        message.channel.send(`Le raidmode est désormais désactiver ! 🔓`)
        console.log("Raidmode " + msg)
      }
      }
    });



       // Salut

bot.on("messageCreate", async message =>{ // commende Hello Salut' ^ 'Bonjour' ^ 'hey'
  if(message.content.startsWith('slt')){
      message.channel.send("Salut")
  }
  else if(message.content.startsWith('Hello')){
    message.channel.send("Hey " + message.author.username +", ça va ?")
  }
  else if(message.content.startsWith('hello')){
    message.channel.send("Hey " + message.author.username +", ça va ?")
  }
  else if(message.content.startsWith('salut')){
    message.channel.send("Bonjour.")
  }
  else if(message.content.startsWith('Salut')){
    message.channel.send("Bonjour.")
  }
  else if(message.content.startsWith('hello')){
    message.channel.send("! Hello .")
  }
  else if(message.content.startsWith('hello')){
    message.channel.send("! Hello")
  }
});

       // TEMPMUTE

bot.on("messageCreate", async message =>{ // commande mute
  if(message.content.startsWith(prefix + "tempmute")){
    if(!message.member.permissions.has("MODERATE_MEMBERS")) return message.channel.send(message.author.username + " Vous n'avez pas les permission d'effectué cette commande.")
    let args = message.content.trim().split(/ +/g);
    if (!args[1]) return message.channel.send('Spécifier un membre à mute!');
    
    const target = message.mentions.members.find(m => m.id);
    const duration = args.slice(2, 4).join(" ");
    if (!duration) return message.channel.send('Spécifier une durée pour votre mute!');
    let reason = args.slice(4).join(" ");
    console.log(reason);
    console.log(duration);
    if(!duration) return message.channel.send("Spécifier une durée pour votre mute!")
    if(!reason) return message.channel.send("Spécifier une raison pour votre mute!")
    const convertedTime = ms(duration);

//    if(target == message.author.id) return message.channel.send("Vous ne pouvez pas vous mute vous même !") //ne marche pas
    if (!target.moderatable) return message.channel.send('Ce membre ne peux pas être mute !');
    if (!convertedTime) return message.channel.send('Spécifier une durée valable');
//    console.log(convertedTime) //savoir le temps max
    if (convertedTime > 604800000) return message.channel.send('La durée de mute ne peux pas depasser 7 jours');
    
    target.timeout(convertedTime, reason);
    const avatarEmbed = new MessageEmbed()
    .setColor('#E74C3C')
    .setTitle('TempMute User')
    .setDescription('TempMute par ' + message.author.username)
    .setThumbnail('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png')
    .addFields(
      { name: 'Objet :', value: `L'utilisateur ${target} à été mute pour ${duration}.` },
      { name: 'Raison :', value: reason, inline: false },
)
      message.channel.send({ embeds: [avatarEmbed] });
    console.log(`L'utilisateur ${target} est mute pendant ${duration}`);
  }
});

       // Demute

bot.on("messageCreate", async message =>{ // commande demute
  if(message.content.startsWith(prefix + "demute")){
    if(!message.member.permissions.has("MODERATE_MEMBERS")) return message.channel.send(message.author.username + " Vous n'avez pas les permission d'effectué cette commande.")
    let args = message.content.slice(8);
    if (!args[0]) return message.channel.send('Spécifier un membre à démute!');

    const target = message.mentions.members.find(m => m.id);

    if (!target.isCommunicationDisabled()) return message.channel.send('Ce membre ne peux pas être démute car il n\'est pas mute!');
    
    target.timeout(null);
    message.channel.send(`Le membre ${target} a été démute !`);
  }
});


// bot.on("messageCreate", async message =>{ // commende dinfo a regler
//   if(message.content.startsWith(`${prefix}test`)){
//     const exampleEmbed = new MessageEmbed()
// 	    .setColor('#0099ff')
// 	    .setTitle('Some title')
// 	    .setURL('https://discord.js.org/')
// 	    .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
// 	    .setDescription('Some description here')
//     	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
// 	    .addFields(
// 		    { name: 'Regular field title', value: 'Some value here' },
// 		    { name: '\u200B', value: '\u200B' },
// 	    	{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	    	{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	)
// 	.addField('Inline field title', 'Some value here', true)
// 	.setImage('https://i.imgur.com/AfFp7pu.png')
// 	.setTimestamp()
// 	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

//   message.channel.send({ embeds: [exampleEmbed] });

//   }
// });


        // Plusieur en 1

bot.on('messageCreate', async message => {
    if (message.content === `${prefix}InfoServeur`) { // info sur le serveur
      let serveurname = `${message.guild.name}`
      const members = message.guild.members.cache;
      const verificationLevels = {
        NONE: 'None',
        LOW: 'Low',
        MEDIUM: 'Medium',
        HIGH: '(╯°□°）╯︵ ┻━┻',
        VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
    };
      const regions = {
        brazil: 'Brazil',
        europe: 'Europe',
        hongkong: 'Hong Kong',
        india: 'India',
        japan: 'Japan',
        russia: 'Russia',
        singapore: 'Singapore',
        southafrica: 'South Africa',
        sydeny: 'Sydeny',
        'us-central': 'US Central',
        'us-east': 'US East',
        'us-west': 'US West',
        'us-south': 'US South'
    };
    
      const exampleEmbed2 = new MessageEmbed(
        {
          "title": "InfoServeur",
          "description": "Info sur le serveur, donnés, analyse, id et autre ...",
          "color": 'BLACK',
          "timestamp": "",
          "fields": [
            {
              "name": "Nom du serveur :",
              "value": "`" + serveurname + "`" 
            },
            {
              "name": "Nombre de Membre :",
              "value": "`" + message.guild.memberCount +"`"
            },
            {
              "name": "Id du serveur :",
              "value": "`" + message.guild.id +"`"
            },
            {
              "name": "Region du Serveur :",
              "value": "`" + regions[message.guild.region] +"`"
            },
            {
              "name": "Niveau de Verification :",
              "value": "`" + verificationLevels[message.guild.verificationLevel] +"`"
            },
          ]
        },
        )
        message.channel.send({ embeds: [exampleEmbed2] }).then(embedMessage => {
          embedMessage.react("🔌");
        });
    }
});
bot.on('messageCreate', async message => {
  if (message.content === `${prefix}avatar`) { // avatar commende
    const avatarEmbed = new MessageEmbed()
        .setColor(0x333333)
        .setTitle(message.author.username)
        .setImage(message.author.displayAvatarURL());
      message.channel.send({ embeds: [avatarEmbed] });
  }
});


       // aJOUT D4UN MEMBRE

bot.on('guildMemberAdd', (member) => {
 // Lorsqu'un utilisateur rejoint.
  let welcomeChannel = bot.channels.cache.get(SalonDeBienvenue);
  if (SalonDeBienvenue == undefined) return console.log("Erreur SalonDeBienvenue is unidefined") 
  welcomeChannel.send(Messagebienvenue +' <@' + member.user.id + '> !'); // tag == User#1234
//  member.roles.add(); 
//ajouter un role
  console.log("Un nouveau memebre a rejoint le serveur, il s'appelle : " + member.user.tag)
});


bot.on("messageCreate", async message =>{ // commende dinfo a regler
  if(message.content.startsWith(`${prefix}managewelcome`)){
      if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(message.author.username + " Vous n'avez pas les permission d'effectué cette commande.")
      message.delete()
      let msg = message.content.slice(16,34)// prends le message à partir de 4 lettres en comptant say. Si tu fais !say met 5 à la place de 4. ça dépend de ton prefix.
      if(!msg) return message.channel.send(`Merci de preciciez : ${prefix}managewelcome [Id salon de bienvenue] [Message de bienvenue]`) // Si y a rien après say envoie message.
      let msg2 = message.content.slice(35)
      if(!msg2) return message.channel.send(`Merci de preciciez : ${prefix}managewelcome [Id salon de bienvenue] [Message de bienvenue]`)
      SalonDeBienvenue = msg.toString()
      message.channel.send('Le salon de bienvenue à été defini sur : \n' + SalonDeBienvenue)
      Messagebienvenue = msg2.toString()
      message.channel.send('Le message de bienvenue à été defini sur : \n' + Messagebienvenue)
      console.log("L'utilisateur " + `${message.guild.name}` + " à defini : \n -" + Messagebienvenue + "\n -" + SalonDeBienvenue )
    }
});

       // KICK

bot.on("messageCreate", async message => {
  let args = message.content.trim().split(/ +/g) 
  if (args[0].toLocaleLowerCase() === `${prefix}kick`) {
    let membre = message.mentions.members.find(m => m.id);
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(message.author.username + " Vous n'avez pas la permisssion pour effectuer cette commande.")
    if (!membre) return message.channel.send(message.author.username + " Tu doit mentioné un membre")
    if (membre.permissions.has("ADMINISTRATOR")) return message.channel.send(message.author.username + " tu ne peux pas kick cette utilisateur, il est modérateur.")
    if (membre.id == message.author.id) return message.channel.send("Vous ne pouvez pas vous kick.")
    let reason = args.slice(2).join(" ");
    if (!reason) return message.channel.send(message.author.username + "Tu doit écrire une raison a ce kick.")
    membre.kick({days:0, reason: reason})
    const avatarEmbed = new MessageEmbed()
    .setColor('#E74C3C')
    .setTitle('Kick User')
    .setDescription('Kick par ' + message.author.username)
    .setThumbnail('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png')
    .addFields(
      { name: 'Objet :', value: `Kick de l'utilisateur ${membre} du serveur.` },
      { name: 'Raison :', value: reason, inline: false },
)
      message.channel.send({ embeds: [avatarEmbed] });
    console.log("l'utilisateur " + membre + " à été expulser du serveur " + `${message.guild.name}`);
  }
})


bot.on("messageCreate", async message => {
  if(message.content === prefix + "gif"){
   let tab = [
    "https://tenor.com/view/dr%C3%B4le-raised-eyebrows-gif-13019689",
    "https://tenor.com/view/cat-vaccum-cat-automatic-cat-in-car-cute-cat-cattitude-gif-17562882",
    "https://tenor.com/view/slick-fall-ouch-fail-oops-gif-4402351",
    "https://tenor.com/view/drink-drinking-cat-drinks-drinks-drink-water-gif-17764027",
    "https://tenor.com/view/leodagan-merde-kaamelott-conversation-gif-11988507",
    "https://tenor.com/view/enemy-cute-peep-observing-gif-12441086",
    "https://tenor.com/view/french-bulldog-digging-fall-fail-roll-over-gif-17686736",
    "https://tenor.com/view/smile-dog-smile-grin-gif-12997564",
    "https://c.tenor.com/mwq79_si2P8AAAAM/bird-parrot.gif",
    "https://tenor.com/view/funny-dog-run-old-lady-gif-16357953",
    "https://tenor.com/view/lion-king-simba-rafiki-toss-throw-gif-14536237",
    "https://tenor.com/view/frozen-humor-lmfao-lol-elsa-gif-5938938",
    "https://tenor.com/view/fun-day-snow-day-skiing-ostrich-funny-animals-gif-13750129",
    "https://tenor.com/view/macron-perlimpinpin-marine-lepen-politique-gif-10073226"
  ]
  let index = Math.floor(Math.random() * (tab.length))
  message.channel.send(tab[index])
}
});

bot.on("messageCreate", async message => { // commende say
  if(message.content.startsWith(prefix +"say")){
    message.delete()
    let msg = message.content.slice(5)
    if(!msg) return message.channel.send(` Veuillez préciser ce que vous voulez que j'envoie !`)

    let embed = new MessageEmbed()
    .setDescription(msg)
    .setFooter({ text: "Par " + message.author.username, iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
    message.channel.send({ embeds: [embed] });
    } 
})

bot.on("messageCreate", message => {
  if(message.content.startsWith(prefix + "clear")) {
      if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(message.author.username +" Vous n'avez pas la permisssion pour effectuer cette commande. ")
      let args = message.content.trim().split(/ +/g);
       message.delete()
    
      if(args[1] == undefined){
        message.channel.send(message.author.username + " Votre nombre de message est mal defini.")
      }
      else {
        let number = parseInt(args[1]);

        if(isNaN(number)){
          message.channel.send("Le nombre est mal defini")
        }
        else {
          message.channel.bulkDelete(number).then(message => {
            console.log("supression de " + message.size + " message réussi")
          }).catch(err => {
            console.log("erreur de clear :" + err )
            message.channel.send(message.author.username + " les messages ne peuvent pas être suprimer car il date de plus de 14 jours.")
          }) 
        }
      }
    }
});

bot.on("messageCreate", async message =>{ //sondage
  if(message.content.startsWith(prefix +"sondage")){
      message.delete()
      let msg = message.content.slice(9) // prends le message à partir de 4 lettres en comptant say. Si tu fais !say met 5 à la place de 4. ça dépend de ton profix.
      if(!msg) return message.channel.send("Merci de preciciez ce que vous voulez que je recopie.") // Si y a rien après say envoie message.
      const exampleEmbed = new MessageEmbed()
	    .setColor('#ffff00')
	    .setTitle('👍 Sondage 👎')
	    .setURL('https://sites.google.com/view/flipflopbot/accueil')
	    .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
    	.setThumbnail('https://cdn-icons-png.flaticon.com/128/2494/2494871.png')
	    .addField(` 



      Propostion :`,msg, true)
	    .setTimestamp()
	    .setFooter({ text: 'Sondage', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

      message.channel.send({ embeds: [exampleEmbed] }).then(embedMessage => {
        embedMessage.react("👍");
        embedMessage.react("👎");
      })
  }
});

       
// RAID MODE

bot.on('guildMemberAdd', (member) => {
  if (Raidmode === true) {
    member.kick("Serveur en mode RaidMode ! 🔒")
  }
});


bot.on("messageCreate", async message =>{ //sondage
  if(message.content.startsWith(prefix +"chifoumi")){
    let msg = message.content.slice(11)
    if(!msg) return message.channel.send(`Merci de preciser Pierre,Feuille ou Ciseaux ${message.author.username} !`)
    if(msg !== "Feuille" && msg !== "Pierre" && msg !== "Ciseaux") return message.channel.send("Merci de renseigner soit `Ciseaux/Pierre/Feuille` bien orthographier "  + message.author.username +" !")

    let Pierre = false
    let Feuille = false
    let Ciseaux = false
    message.channel.send("Chi...Fou...Mi :")
    let tab = [
      `Pierre 🗿 !`,
      `Feuille 🌿 !`,
      `Feuille 🌿 !`,
      `Feuille 🌿 !`,
      `Feuille 🌿 !`,
      `Ciseaux ✂ !`,
      `Ciseaux ✂ !`
    ]
    let index = Math.floor(Math.random() * (tab.length))
    let choixbot = tab[index]
    message.channel.send(choixbot)
    
    if(choixbot == `Pierre 🗿 !`){ Pierre = true}
    else if(choixbot == `Feuille 🌿 !`){ Feuille = true}
    else if(choixbot == `Ciseaux ✂ !`){ Ciseaux = true}

    if(msg == "Pierre"){
      if(Feuille == true){
        message.channel.send("Tu à Perdu ! Peut être la prochaine fois ...")
        }
      else if(Pierre == true){
        message.channel.send("Egalité ! MMm, t'a de la chance ...")
        }
      else if(Ciseaux == true){
        message.channel.send("😒 T'a gagner ! Bien joué, un coup de chance surment ...")
        }
      }
    else if(msg == "Ciseaux"){
      if(Feuille == true){
        message.channel.send("😒 T'a gagner ! Bien joué, un coup de chance surment ...")
        }
      else if(Pierre == true){
        message.channel.send("Tu à Perdu ! Peut être la prochaine fois ...")
        }
      else if(Ciseaux == true){
        message.channel.send("Egalité ! MMm, t'a de la chance ...")
        }
      } 
    else if(msg == "Feuille"){
      if(Feuille == true){
        message.channel.send("Egalité ! MMm, t'a de la chance ...")
        }
      else if(Pierre == true){
        message.channel.send("😒 T'a gagner ! Bien joué, un coup de chance surment ...")
        }
      else if(Ciseaux == true){
        message.channel.send("Tu à Perdu ! Peut être la prochaine fois ...")
        }
        }
  }
});


// devine la couleur

bot.on("messageCreate", async message =>{ //bouton
  if(message.content.startsWith(prefix +"color")){
    let tab = [
      `Bravo tu à gagner ! 😎`,
      `Bravo ! C'est gagner, je te félicite ! 😎`,
      `Perdu ! Dommage pour toi, une prochaine fois peut être ...`,
      `Perdu ! Dommage pour toi, une prochaine fois peut être ...`,
      `Perdu ! Dommage pour toi, the next time perhaps ...`,
      `Perdu ! Ah c'est triste, c'est pas de ma faute si tu ais mauvais a ce jeux .`
    ]
    let index = Math.floor(Math.random() * (tab.length))
    let choixbot = tab[index]
    
    let msg
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId('Rouge')
        .setEmoji('🔥')
        .setLabel('Rouge')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
          .setCustomId('Bleu')
          .setEmoji('🛹')
          .setLabel('Bleu')
          .setStyle('PRIMARY')
        )
        .addComponents(
          new MessageButton()
            .setCustomId('Vert')
            .setEmoji('⛺')
            .setLabel('Vert')
            .setStyle('SUCCESS')
          )  
          .addComponents(
            new MessageButton()
              .setCustomId('Orange')
              .setEmoji('🚕')
              .setLabel('Orange')
              .setStyle('PRIMARY')
            )

    // const linkRow = new MessageActionRow()
    //   .addComponents(
    //      new MessageButton()
    //       .setURL('https://sites.google.com/view/flipflopbot/accueil')
    //       .setLabel('Visit FlipFlopSite')
    //       .setStyle('LINK')
    //  )

    msg = await message.channel.send({
      content: 'Bienvenue sur le jeux color. Le bot à choisi une couleur à toi de la deviner ...',
      components: [row],
//      ephemeral: true, //uniquement pour les message /...
      })

    const filter = (ButtonInteraction) => {
      return message.author.id === ButtonInteraction.user.id
    }

    const collector = message.channel.createMessageComponentCollector({
      filter,
      max: 1,
      time: 1000 * 15 
    })

    collector.on('collect', (ButtonInteraction) => {
      ButtonInteraction.channel.send({
        content: '🥁 🥁 🥁 ',
//      ephemeral: true, //uniquement pour les message /...
      })
    })

    collector.on('end', async (Collection) => {
      Collection.forEach((click) => {
        console.log(click.user.id, click.customId)
        msg.edit({
          content:`Fin de Color. Si tu veux en refaire tape 'f!color'`,
          components: []
        })
      })

    if (Collection.first()?.customId === 'Vert') {
      message.channel.send("La couleur que tu à choisi est Verte ... \n" + choixbot )
    }

    else if (Collection.first()?.customId === 'Bleu') {
      message.channel.send("La couleur que tu à choisi est Bleu ... \n" + choixbot )
    }
    
    else if (Collection.first()?.customId === 'Rouge') {
      message.channel.send("La couleur que tu à choisi est Rouge ... \n" + choixbot )
    }

    else if (Collection.first()?.customId === 'Orange') {
      message.channel.send("La couleur que tu à choisi est Orange ... \n" + choixbot )
    }

    
     })
  }
});

bot.on("messageCreate", async message =>{ //sondage
  if(message.content.startsWith(prefix +"WinMoney")){
    if (talkedRecently.has(message.author.id)) {
      message.channel.send("Merci de patienter 10 secondes avant de pouvoir réutiliser la commande <@" + message.author.id + ">");
    } else {
    let tab = [
      'Rien',
      '20$'
    ]
    let index = Math.floor(Math.random() * (tab.length))
    let Mystère = tab[index]
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId(Mystère)
        .setEmoji('🌌')
        .setLabel('Mystère')
        .setStyle('SUCCESS')
      )
    msg = await message.channel.send({
      content: `Votre objectif est d'avoir un maximum d'argent sur le compte du serveur. \n Vous pouvez voir l'argent du serveur en tapent f!Money \n Vous avez une 1 sur 2 d'obtenir 20$* 💰.`,
      components: [row],
//      ephemeral: true, //uniquement pour les message /...
      })

    const filter = (ButtonInteraction) => {
      return message.author.id === ButtonInteraction.user.id
    }

    const collector = message.channel.createMessageComponentCollector({
      filter,
      max: 1,
      time: 1000 * 15 
    })
    
    collector.on('end', async (Collection) => {
      Collection.forEach((click) => {
        console.log(click.user.id, click.customId)
      })
    

    if (Collection.first()?.customId === 'Rien') {
      Money = (Money - 10)
      msg.edit({
        content:" 💀 Dommage tu prend un malus, le compte du serveur pert 10$ 💀 REJOUE",
        components: []
      })   
    }

    if (Collection.first()?.customId === '20$') {
      Money = (Money + 20)
      msg.edit({
        content:` 💰 20$ dollards on été ajouter sur le compte du serveur <@${message.author.id}> 💰 (Voir f!Money)`,
        components: []
      })
      }
    })
    talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
  }, 10000);
  }
  }
});



bot.on("messageCreate", async message =>{ //sondage
  if(message.content.startsWith(prefix +"help")){
    const exampleEmbed1 = new MessageEmbed(
      {
        "title": "HELP COMMANDES",
        "description": "Bonjour je suis FlipFlop et je dispose d'un tas de commande ! Découvre les maintenant !",
        "color": 5815413
      },
      {
        // "title": "Commands Divers",
        // "description": "`f!color` : Joue à devinier la couleur auquele le bot pense. \n `f!gif` : Te donne des gifs drôle ou/et amusent ! \n `f!hacked` : Tente de trouver Hacked.",
        // "color": 5814783,
        // "fields": [
        //   {
        //     "name": "Commandes Divers",
        //     "value": "`f!color` : Joue à devinier la couleur auquele le bot pense. \n `f!gif` : Te donne des gifs drôle ou/et amusent ! \n `f!hacked` : Tente de trouver Hacked."
        //   },
        //   {
        //     "name": "Commande ",
        //     "value": "You can create reaction roles with the bot using the `reactionrole` command, the set-up process is very simple: add a reaction to any existing message in your server, and name the role.\n\nNote that while other bots may allow you to configure reaction roles, Discohook's are the only ones we can give support for."
        //   },
        //   {
        //     "name": "Recover Discohook messages from your server",
        //     "value": "The bot is capable of turning most message links sent inside your server into Discohook links. Use the `restore` command with a message link to move that message from Discord into Discohook."
        //   }
        // ]
      }
    )
    message.channel.send({ embeds: [exampleEmbed1] });
    const exampleEmbed2 = new MessageEmbed(
    {
      "title": "Commandes Divers",
      "description": "`f!color` : Joue à deviner la couleur auquelle le bot pense. \n `f!gif` : Te donne des gifs drôle ou/et amusent ! \n `f!hacked` : Tente de trouver Hacked. \n `f!chifoumi [Pierre/Feuille/Ciseaux]` : Joue à chifoumi avec FlipFlop, tout simplement. \n `f!say [MESSAGE]` : Le bot Répète ce que tu dit 🦜. \n `f!sondage [MESSAGE]` : Propose un sondage au autre membres pour débattre d'un sujet. \n `f!InfoServeur` : Toute les info du serveur détailler. \n `f!avatar` : Découvre ton avatar en 12K XD FLOP. \n`f!Ara` : Découvre les ara en vrai. \n `f!énigme [Level1/Level2/Level3]` : Engime 3 levels differents !",
      "color": 5815413,
      "fields": [
        {
          "name": "Commandes Moderation !",
          "value": "`f!setBot`: Set le bot. \n `f!tempmute [@USER] [TEMPS seconds/minutes/hours/day] [RAISON] `: Tempmute un utilisateur pendant une certaine durée. \n `f!demute [@USER]`: Demute un utilisateur. \n `f!kick [@USER] [RAISON] `: Kick un utilisateur. \n `f!raidmode [On/Off] `: Le systeme RaidMode empeche tout le monde de rejoindre le serveur. \n `f!spammode [On/Off] `: Bloquer le Spam et mute le responsable de l'insulte pendant 10min si il spam trop ... \n `f!antiinsulte [On/Off] `: Bloquer les insultes et mute le responsable de l'insulte pendant 10min. \n `f!clear [NOMBRE]  `: Clear un nombre de message donné. \n `f!managewelcome [ID SALON] [MESSAGE DE BIENVENUE] `: Definir un message de bienvenue quand un nouveau membre rejoint le serveur. \n `f!ban [@USER] [RAISON] `: Ban un utilisateur. \n `f!tempban [@USER] [TEMPS] [RAISON]`: Ban un utilisateur pendant une certaine durée (en jours)."
        },
        {
          "name": "Commandes Money",
          "value": "`f!WinMoney `: Tente de faire augmenter la money du serveur (Voir en detail ...) \n `f!Money `: Voir la money du serveur. \n "
        }
      ]
    },
    )
    message.channel.send({ embeds: [exampleEmbed2] }).then(embedMessage => {
      embedMessage.react("☄");
      embedMessage.react("📀");
    });
  }
});

bot.on("messageCreate", async message =>{ //sondage
  if(message.content.startsWith(prefix +"Money")){
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId("Money")
        .setEmoji('💰')
        .setLabel(Money + " $")
        .setStyle('PRIMARY')
      )
    msg = await message.channel.send({
      content: `La Money du serveur est de :`,
      components: [row],
//      ephemeral: true, //uniquement pour les message /...
      })

    const filter = (ButtonInteraction) => {
      return message.author.id === ButtonInteraction.user.id
    }

    const collector = message.channel.createMessageComponentCollector({
      filter,
      max: 0,
      time: 1000 * 15 
    })
    
  }
});

bot.on("messageCreate", async message =>{ //sondage
  if(message.content.startsWith(prefix +"Ara")){
    const row = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('Ara')
      .setEmoji('🦜')
      .setLabel('Ara')
      .setStyle('SUCCESS')
    )
    .addComponents(
      new MessageButton()
        .setCustomId('Cancel')
        .setLabel('Cancel')
        .setStyle('DANGER')
      )
    msg = await message.channel.send({
      content: `êtes vous sur de vouloir continuer`,
      components: [row],
//      ephemeral: true, //uniquement pour les message /...
      })

    const filter = (ButtonInteraction) => {
      return message.author.id === ButtonInteraction.user.id
    }

    const collector = message.channel.createMessageComponentCollector({
      filter,
      max: 1,
      time: 1000 * 15 
    })
    
    collector.on('end', async (Collection) => {
      Collection.forEach((click) => {
        console.log(click.user.id, click.customId)
      })
    

    if (Collection.first()?.customId === 'Ara') {
      msg.edit({
        content:"Vous avez gagner un Ara 🦜! Bien joué ! Vous êtes l'élu. \n https://tenor.com/view/bird-parrot-pajaro-p%C3%A1jaro-loro-gif-12140011",
        components: []
      })   
    }

    if (Collection.first()?.customId === 'Cancel') {
      msg.edit({
        content:`Dommage ! Tempis pour vous.`,
        components: []
      })
    }
    })
  }
});



  bot.on("messageCreate", async message =>{ //sondage
      if(message.content.startsWith(prefix +"Channel56146541Y")){

        var channelname = message.content.slice(10)
        if(!channelname) return message.reply("Precisez le nom du salon.")
        chan = message.guild.channels.create(channelname, {
          type: 'text',
          permissionOverwrites: [{
            id: message.guild.id,
            deny: ['SEND_MESSAGES'],
            allow: ['ADD_REACTIONS']
          },
          {
              id: message.author.id,
              allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
          },]
      }).then(chan => {
        chan.send(`Création du salon ${channelname}!`)
        message.reply("Salon Hello crée ")
        })
      .catch(console.error);
      }  
});

// bot.on("messageCreate", async message =>{
//   if(message.content.startsWith(prefix +"close-ticket")){ 
//       setTimeout(() => {
//         chan => chan.delete()
//       }, 1000)
      
//   }  
// })

// bot.on("messageCreate", async message =>{ //sondage
//   if(message.content.startsWith(prefix +"close-ticket")){
//   chan => {
//     setTimeout(() => {
//       // Removes the user from the set after a minute
// //      if(chan !== message.channel.id) return;
//       chan.delete()
//     }, 1000);
//   }
// }
// });

bot.on("messageCreate", async message =>{ //sondage
  if(message.content.startsWith(prefix +"deleteChannel")){
    if(!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(message.author.username + " Vous n'avez pas les permission d'effectué cette commande.")
    var channelsupp = false
    const row = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId("Confirm")
        .setLabel('Confirmer')
        .setStyle('PRIMARY')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("Cancel")
        .setLabel('Annuler')
        .setStyle('DANGER')
      )
        msg = await message.channel.send({
          content: "Voulez vraiment supprimer ce salon <@" + message.author.id + "> ?",
          components: [row],
        //  ephemeral: true, //uniquement pour les message /slash
          })
    
        const filter = (ButtonInteraction) => {
          return message.author.id === ButtonInteraction.user.id
        }
    
        const collector = message.channel.createMessageComponentCollector({
          filter,
          max: 1,
          time: 100000 * 15 
        })
        
        collector.on('end', async (Collection) => {
          Collection.forEach((click) => {
            console.log(click.user.id, click.customId)
            if(message.author.id !== click.user.id) return;
          })
        
    
        if (Collection.first()?.customId === 'Confirm') {
          channelsupp = true
          msg.delete()
          msgSupp = await message.channel.send("Supression du channel dans  5 secondes")
          setTimeout(() => {
            msgSupp.edit("Supression du channel dans  4 secondes")
                }, 1000);
          setTimeout(() => {
            msgSupp.edit("Supression du channel dans  3 secondes")
                }, 1000);
          setTimeout(() => {
            msgSupp.edit("Supression du channel dans  2 secondes")
                }, 1000);
          setTimeout(() => {
            msgSupp.edit("Supression du channel dans  1 secondes")
                }, 1000);
          setTimeout(() => {
            msgSupp.edit("Supression du channel dans  0 secondes")
                }, 1000);
          setTimeout(() => {
            message.channel.delete()
            console.log(message.channel.id + "à été suprimer.")
                }, 6000);
        }
    
        if (Collection.first()?.customId === 'Cancel') {
          channelsupp = true
          msg.edit({
            content: "Commande annulé",
            components: [],
            })
        }
        
        setTimeout(() => {
          if(channelsupp = false){
          msg.edit({
            content: "Commande annulé, temps d'attente trop long.",
            components: [],
            })
          }
              }, 60000);
        })
      }
});

bot.on("message", async message => {
  if(message.content.startsWith(prefix + "setBot")) { 
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(message.author.username +" Vous n'avez pas la permisssion pour effectuer cette commande. ")
    var channelmessage = message.channel
    var ModeAntiInsulte = false
    var ModeAntiSpam = false
    var ModeChannelBienvenue = false
    var Author = message.author.id
    var ModelogsServeur = false

    const Rowdébut = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId("Start")
        .setLabel('Commancer')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("Cancel")
        .setLabel('Cancel')
        .setStyle('DANGER')
      )
      .addComponents(
        new MessageButton()
        .setLabel('Notre site')
        .setURL('https://sites.google.com/view/flipflopbot/accueil')
        .setStyle('LINK')
      )
      const Début = new MessageEmbed()
        .setColor('#1ABC9C')
	      .setTitle('⚙ SetBot ⚙')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 ')
        .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
        .addFields(
          { name: '⚙ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
          { name: '⚙ | Sytème anti-Spam', value: `Systsème qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
          { name: '⚙ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
          { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
    )
        .setTimestamp()
        .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
        

        const Anti_insulte = new MessageEmbed()
        .setColor('#1ABC9C')
	      .setTitle('⚙ SetBot ⚙')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 ')
        .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
        .addFields(
          { name: '⚙ | Sytème anti-Insulte', value: '**Ecrivez `Activer` ou `Desactiver`, pour regler le mode Anti-Insulte**' },
          { name: '⚙ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
          { name: '⚙ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
          { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
    )
        .setTimestamp()
        .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

        const Anti_Spam = new MessageEmbed()
        .setColor('#1ABC9C')
	      .setTitle('⚙ SetBot ⚙')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 ')
        .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
        .addFields(
          { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
          { name: '⚙ | Sytème anti-Spam', value: '**Ecrivez `Activer` ou `Desactiver`**, pour regler le mode Anti-Spam' },
          { name: '⚙ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
          { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
    )
        .setTimestamp()
        .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

        const MessagedeBienvenue = new MessageEmbed()
        .setColor('#1ABC9C')
	      .setTitle('⚙ SetBot ⚙')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 ')
        .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
        .addFields(
          { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.`},
          { name: '✅ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
          { name: '⚙ | Sytème Message de Bienvenue', value: '**Ecrivez `Activer [id salon] [Message de bienvuenue]` ou `Inactif`**, pour regler le mode message de bienvenue.' },
          { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
    )
        .setTimestamp()
        .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });


        const LogsInfo = new MessageEmbed()
        .setColor('#1ABC9C')
	      .setTitle('⚙ SetBot ⚙')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 ')
        .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
        .addFields(
          { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
          { name: '✅ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
          { name: '✅ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
          { name: '⚙ | Logs du serveurs', value: '**Ecrivez `Activer [id salon de logs]` ou `Desactiver`**, pour regler le mode logs.' },
    )
        .setTimestamp()
        .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

        const Fin = new MessageEmbed()
        .setColor('#1ABC9C')
	      .setTitle('⚙ SetBot ⚙')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 ')
        .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
        .addFields(
          { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
          { name: '✅ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
          { name: '✅ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
          { name: '✅ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
    )
        .setTimestamp()
        .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });


      msg = await message.channel.send({
        embeds: [Début],
        components: [Rowdébut],
  //      ephemeral: true, //uniquement pour les message /...
        })



    const filter = (ButtonInteraction) => {
      return message.author.id === ButtonInteraction.user.id
    }

    var collector = message.channel.createMessageComponentCollector({
     filter,
      max: 1,
      time: 10000 * 20
    })
  
    collector.on('end', async (Collection) => {
      Collection.forEach((click) => {
        console.log(click.user.id, click.customId)
        if(message.author.id !== click.user.id) return;
      })
    

    if (Collection.first()?.customId === 'Cancel') {
      msg.delete()
    }


    if (Collection.first()?.customId === 'Start') {
      msg.edit({
        embeds: [Anti_insulte],
        components: []
      })   
      ModeAntiInsulte = true
    }
    })

    // setTimeout(() => {
    //   msg.delete()
    // }, 120000)

    bot.on("messageCreate", async message => {
      if(ModeAntiInsulte == true){
        msgAntiInsulte = message.content.slice()
        if(msgAntiInsulte == "Activer"){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          ModeAntiInsulte = false
          message.delete()
          AntiInsulte = true
         msgOn = await message.channel.send("Système anti-Insulte On 🔒")
         setTimeout(() => {
          msg.edit({
            embeds: [Anti_Spam],
            components: [],
           })
           ModeAntiSpam = true
        }, 100)
         setTimeout(() => {
          msgOn.delete()
        }, 3000)
        }
        if(msgAntiInsulte == "Desactiver"){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          ModeAntiInsulte = false
          message.delete()
          AntiInsulte = false
         msgOnn = await message.channel.send("Système anti-Insulte Desactiver 🔓")
         setTimeout(() => {
          msg.edit({
            embeds: [Anti_Spam],
            components: [],
           })
           ModeAntiSpam = true
        }, 100)
         setTimeout(() => {
          msgOnn.delete()
        }, 3000)
        }
      }
    })

    bot.on("messageCreate", async message => {
      msgAntiSpam = message.content.slice()
      if(ModeAntiSpam == true){
        if(msgAntiSpam == "Activer"){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          ModeAntiSpam = false
          message.delete()
          Spammode = true
         msgOn2 = await message.channel.send("Système anti-Spam On 🔒")
         msg.edit({
          embeds: [MessagedeBienvenue],
          components: [],
         })
         ModeChannelBienvenue = true
         setTimeout(() => {
          msgOn2.delete()
        }, 3000)
        }
        if(msgAntiSpam == "Desactiver"){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          ModeAntiSpam = false
          message.delete()
          Spammode = false
         msgOnn2 = await message.channel.send("Système anti-Spam Desactiver 🔓")
         msg.edit({
          embeds: [MessagedeBienvenue],
          components: [],
         })
         ModeChannelBienvenue = true
         setTimeout(() => {
          msgOnn2.delete()
        }, 3000)
        }
      }
    })

    bot.on("messageCreate", async message => {
      if(ModeChannelBienvenue == true){
        msgChannelBienvenue = message.content.slice()
        if(msgChannelBienvenue.startsWith("Activer")){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          let args = message.content.trim().split(/ +/g);
          const msgChan2 = args.slice(1, 2).join(" ");
          const msgChan3 = args.slice(2).join(" ");
          if(!msgChan2 && !msgChan3) return message.channel.send("Merci d'écrire correctement : `Activer [id salon] [Message de bienvuenue]`")
          message.delete()
          ModeChannelBienvenue = false
         SalonDeBienvenue = msgChan2
         Messagebienvenue = msgChan3
         msgOn3 = await message.channel.send('Le salon de bienvenue à été defini sur : \n' + SalonDeBienvenue  + "\n" + 'Le message de bienvenue à été defini sur : \n' + Messagebienvenue)
         console.log("L'utilisateur " + `${message.guild.name}` + " à defini : \n -" + Messagebienvenue + "\n -" + SalonDeBienvenue )
         msg.edit({
          embeds: [LogsInfo],
          components: [],
         })
         ModelogsServeur = true
         setTimeout(() => {
          msgOn3.delete()
        }, 6000)
        }
        if(msgChannelBienvenue == "Inactif"){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          ModeChannelBienvenue = false
          message.delete()
          msg.edit({
          embeds: [LogsInfo],
          components: [],
         })
         ModelogsServeur = true
        }
      }
    })

    bot.on("messageCreate", async message => {
      if(ModelogsServeur == true){
        msgLogServeur = message.content.slice()
        if(msgLogServeur.startsWith("Activer")){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          msg.edit({
            embeds: [Fin]
          })

          let args = message.content.trim().split(/ +/g);
          const mslogs = args.slice(1, 2).join(" ");
          if(!mslogs) return message.channel.send("Merci d'écrire correctement : `Activer [id salon log] `");
          message.delete()
          ModelogsServeur = false
          LogsServeurSystème = true
          salonlogs = mslogs
          mslogs6 = await message.channel.send("Système de logs activer dans le salon : " + mslogs + " ❗");
         message.channel.send("Serveur configurer ! 🛠")
         setTimeout(() => {
          mslogs6.delete()
        }, 6000)
        }
        if(msgLogServeur.startsWith("Desactiver")){
          if(channelmessage !== message.channel) return ;
          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
          msg.edit({
            embeds: [Fin]
          })
          ModelogsServeur = false
          message.delete()
          LogsServeurSystème = false
          mslogs7 = await message.channel.send("Système de logs desactiver ❗ ")
          setTimeout(() => {
            mslogs7.delete()
          }, 6000)
         message.channel.send("Serveur configurer ! 🛠")
        }
      }
    })
}
});












              // énigme


bot.on("message", async message => {
  if(message.content.startsWith(prefix + "énigme")) { 
    var level = message.content.slice(9)
    if(!level) return message.channel.send('Spécifier le niveau de level `Level1/Level2/Level3` ')
    if(level !== 'Level1' &&  level !== 'Level2' &&  level !== 'Level3') return message.channel.send('Spécifier corectement le niveau de level `Level1/Level2/Level3` ')
    const row3 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId("71")
        .setLabel('71')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("27")
        .setLabel('27')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("38")
        .setLabel('38')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("40")
        .setLabel('40')
        .setStyle('SUCCESS')
      )

      const row2 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId("237")
        .setLabel('7')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("233")
        .setLabel('3')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("235")
        .setLabel('5')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("234")
        .setLabel('4')
        .setStyle('SUCCESS')
      )

      const row1 = new MessageActionRow()
      .addComponents(
        new MessageButton()
        .setCustomId("3")
        .setLabel('3')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("2")
        .setLabel('2')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("8")
        .setLabel('8')
        .setStyle('SUCCESS')
      )
      .addComponents(
        new MessageButton()
        .setCustomId("4")
        .setLabel('4')
        .setStyle('SUCCESS')
      )
      const Level3 = new MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('Enigme Level 3')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Resolver l\'énigme et cocher la bonne réponse. Vous devez répondre dans les 25 min ou la réponse ne pourra pas être validé.')
        .setImage('https://1.bp.blogspot.com/-mO3CFAE47os/Xogjykvhj_I/AAAAAAAAEU8/f01B-slpE5wZjoMqKSEI9h2DjpPHhI90gCLcBGAsYHQ/s1600/Capture%2Bd%25E2%2580%2599e%25CC%2581cran%2B2020-04-04%2Ba%25CC%2580%2B08.03.46.png')

        const level1 = new MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('Enigme Level 1')
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Resolver l\'énigme et cocher la bonne réponse. Vous devez répondre dans les 25 min ou la réponse ne pourra pas être validé.')
        .setImage('https://wl-sympa.cf.tsp.li/resize/728x/jpg/5c8/c0e/d731ee571a9bed5173a7fd6a47.jpg')

        const Level2 = new MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('Enigme Level 2')
	      .setURL('https://wl-sympa.cf.tsp.li/resize/728x/jpg/14b/66e/8c781950bca3ffebf4aec04194.jpg')
	      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
	      .setDescription('Resolver l\'énigme et cocher la bonne réponse. Vous devez répondre dans les 25 min ou la réponse ne pourra pas être validé.')
        .setImage('https://wl-sympa.cf.tsp.li/resize/728x/jpg/1fe/e7a/26acc753c2b6805beb2575dc05.jpg')


        const Lose = new MessageEmbed()
        .setColor('#0099ff')
	      .setTitle('Enigme ' + level)
	      .setURL('https://sites.google.com/view/flipflopbot/accueil')
	      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
        .setDescription('Resolver l\'énigme et cocher la bonne réponse. Vous devez répondre dans les 25 min ou la réponse ne pourra pas être validé.')
        .addFields(
          { name: 'Fin de l\'énigme', value: 'Vous avez Perdu !'},
          )

         const Win = new MessageEmbed()
         .setColor('#0099ff')
         .setTitle('Enigme ' + level)
         .setURL('https://sites.google.com/view/flipflopbot/accueil')
         .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
         .setDescription('Resolver l\'énigme et cocher la bonne réponse. Vous devez répondre dans les 25 min ou la réponse ne pourra pas être validé.')
         .addFields(
           { name: 'Fin de l\'énigme', value: 'Vous avez Gagné !'},
          )

    if(level == "Level3"){
      msg = await message.channel.send({
        embeds: [Level3],
        components: [row3],
  //      ephemeral: true, //uniquement pour les message /...
        })
    }

    if(level == "Level2"){
      msg = await message.channel.send({
        embeds: [Level2],
        components: [row2],
  //      ephemeral: true, //uniquement pour les message /...
        })
    }

    if(level == "Level1"){
      msg = await message.channel.send({
        embeds: [level1],
        components: [row1],
  //      ephemeral: true, //uniquement pour les message /...
        })
    }


    const filter = (ButtonInteraction) => {
      return message.author.id === ButtonInteraction.user.id
    }

    const collector = message.channel.createMessageComponentCollector({
      filter,
      max: 1,
      time: 100000 * 15 
    })
    
    collector.on('end', async (Collection) => {
      Collection.forEach((click) => {
        console.log(click.user.id, click.customId)
        if(message.author.id !== click.user.id) return;
      })
    

    if (Collection.first()?.customId === '40' | Collection.first()?.customId === '27' | Collection.first()?.customId === '38') {
      msg.edit({
        embeds: [Lose],
        components: []
      })   
    }

    if (Collection.first()?.customId === '237' | Collection.first()?.customId === '233' | Collection.first()?.customId === '234') {
      msg.edit({
        embeds: [Lose],
        components: []
      })   
    }

    if (Collection.first()?.customId === '3' | Collection.first()?.customId === '2' | Collection.first()?.customId === '8') {
      msg.edit({
        embeds: [Lose],
        components: []
      })   
    }

    if (Collection.first()?.customId === '235') {
      msg.edit({
        embeds: [Win],
        components: []
      }) 
      }

    if (Collection.first()?.customId === '4') {
      msg.edit({
        embeds: [Win],
        components: []
      }) 
      }

    if (Collection.first()?.customId === '71') {
      msg.edit({
        embeds: [Win],
        components: []
      }) 
      }

    })
  }
});

bot.on("messageCreate", async message =>{ //sondage
  if(message.author.id === "839544555602706462"){
    if(message.content.startsWith(prefix +"MaintenanceBot")){
      let args = message.content.trim().split(/ +/g);
      let args1 = args.slice(2).join(" ");
      let args2 = args.slice(1, 2).join(" ");
      if(!args) return message.channel.send("Error 5412425 Refference - 1 ")
      if(!args1 || !args2) return message.channel.send("Error 120221 Refference - 2 ")
      const exampleEmbed2 = new MessageEmbed(
        {
          "title": "Maintenance Du Bot",
          "description": "Maintenance du Bot ...",
          "color": 12370112,
          "fields": [
            {
              "name": "Objet de la maintenance : ",
              "value": args1
            },
            {
              "name": "Durée",
              "value": "environ : " + args2 +" Heures"
            }
          ]
        },
        )
        message.channel.send({ embeds: [exampleEmbed2] }).then(embedMessage => {
          embedMessage.react("🕧");
          embedMessage.react("🗳");
        });
        message.delete()
      }
    }
  });



bot.on("messageDelete", async message =>{ //logs
  if(LogsServeurSystème == true){

    if(message.author.bot) return;

      const AuditsLogs = await message.guild.fetchAuditLogs({
        type: 'MESSAGE_DELETE',
        limit: '1'
      })
      const LastedMessageDeleted = AuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Un nouveau message à été supprimer.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Auteur : ${message.author} \n Auteur de la supression : ${LastedMessageDeleted.executor} \n Date de création du message : <t:${Math.round(message.createdAt / 1000)}:R> \n Channel : ${message.channel}`, inline: false},
        { name: 'Contenue du Message', value: `\`\`\`${message.content}\`\`\``, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }

  });

bot.on("messageUpdate", async (oldMessage, newMessage) =>{ //logs
  if(LogsServeurSystème == true){

    if(oldMessage.author.bot) return;

      const AuditsLogs = await newMessage.guild.fetchAuditLogs({
        type: 'MESSAGE_UPDATE',
        limit: '1'
      })
      const LastedMessageDeleted = AuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Un nouveau message à été modifié.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Auteur : ${oldMessage.author} \n Date de création du message : <t:${Math.round(oldMessage.createdAt / 1000)}:R> \n Channel : ${oldMessage.channel}`, inline: false},
        { name: 'Ancien contenu du Message 💨', value: `\`\`\`${oldMessage.content}\`\`\``, inline: false},
        { name: 'Nouveau contenu du Message 💨', value: `\`\`\`${newMessage.content}\`\`\``, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});
  

bot.on("guildBanAdd", async ban =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await ban.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD',
        limit: '1'
      })
      const LastedBan = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Utilisateur Banni.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Banni : ${ban.user} (${ban.user.tag}) \n Banner : ${LastedBan.executor} (${LastedBan.executor.tag}) `, inline: false},
        { name: 'Raison', value: `\`\`\`${ban.reason ? ban.reason : "Aucune raison de ban spécifier."}\`\`\``, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});

bot.on("guildBanRemove", async ban =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await ban.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_REMOVE',
        limit: '1'
      })
      const LastedUnBan = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Utilisateur Debanni.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Debanni : ${ban.user} (${ban.user.tag}) \n Debanner : ${LastedUnBan.executor} (${LastedUnBan.executor.tag}) `, inline: false},
        { name: 'Raison', value: `\`\`\`${ban.reason ? ban.reason : "Aucune raison de déban spécifier."}\`\`\``, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});

bot.on("channelCreate", async channelcreate =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await channelcreate.guild.fetchAuditLogs({
        type: 'CHANNEL_CREATE',
        limit: '1'
      })
      const Lastedchannelcreate = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Channel crée.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Auteur de la création du channel : ${Lastedchannelcreate.executor} \n Date de création du channel : <t:${Math.round(channelcreate.createdAt / 1000)}:R> \n Catégorie du channel : ${channelcreate.parent}`, inline: false},
        { name: 'Nom du channel', value: `\`\`\`${channelcreate.name}\`\`\``, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});

bot.on("channelDelete", async channeldelete =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await channeldelete.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE',
        limit: '1'
      })
      const Lastedchanneldelete = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Channel supprimer.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Auteur de la supression du channel : ${Lastedchanneldelete.executor} \n  Catégorie du channel : ${channeldelete.parent}`, inline: false},
        { name: 'Nom du channel', value: `\`\`\`${channeldelete.name}\`\`\``, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});


bot.on("channelUpdate", async (oldChannel, newChannel) =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await newChannel.guild.fetchAuditLogs({
        type: 'CHANNEL_UPDATE',
        limit: '1'
      })
      const Lastedchannelupdate = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Channel update.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Auteur de la modification du channel : ${Lastedchannelupdate.executor} \n Date de création du channel : <t:${Math.round(newChannel.createdAt / 1000)}:R> \n Catégorie du channel : ${newChannel.parent}`, inline: false},
        { name: 'Nom du Salon Avant 💨', value: `\`\`\`${oldChannel.name}\`\`\``, inline: false},
        { name: 'Nom du Salon Maintenant 💨', value: `\`\`\`${newChannel.name}\`\`\``, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});

bot.on("emojiCreate", async newemoji =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await newemoji.guild.fetchAuditLogs({
        type: 'EMOJI_CREATE',
        limit: '1'
      })
      const LastedEmoji = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Emoji crée.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Auteur de l'émoji : ${LastedEmoji.executor} \n Date de création de l'émoji : <t:${Math.round(newemoji.createdAt / 1000)}:R> \n Emoji : ${newemoji.animated}\n Emoji url : ${newemoji.url ? newemoji.url : "Emoji non custom."}`, inline: false},
        { name: 'Nom de l\'émoji', value: `\`\`\`${newemoji.name}\`\`\``, inline: false},
  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});

bot.on("roleCreate", async newrole =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await newrole.guild.fetchAuditLogs({
        type: 'ROLE_CREATE',
        limit: '1'
      })
      const LastedRole = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Rôle crée.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Créateur du rôle : ${LastedRole.executor} \n Date de création du rôle : <t:${Math.round(newrole.createdAt / 1000)}:R> \n Role couleur : ${newrole.color}\n Rôle icon: ${newrole.icon} \n Id du rôle: ${newrole.id}`, inline: false},
        { name: 'Nom du rôle', value: `\`\`\`${newrole.name}\`\`\``, inline: false},
  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});

bot.on("roleUpdate", async (oldRole, newRole) =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await newRole.guild.fetchAuditLogs({
        type: 'ROLE_UPDATE',
        limit: '1'
      })
      const LastedRoleUpdate = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Rôle mis à jour.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Modificateur du rôle : ${LastedRoleUpdate.executor} \n Date de création du rôle : <t:${Math.round(oldRole.createdAt / 1000)}:R> \n Role couleur : ${newRole.color}\n Rôle icon: ${newRole.icon} \n Id du rôle: ${newRole.id}`, inline: false},
        { name: 'Nom du rôle avant 💨', value: `\`\`\`${oldRole.name}\`\`\``, inline: false},
        { name: 'Nom du rôle maintentant 💨', value: `\`\`\`${newRole.name}\`\`\``, inline: false},
  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});

bot.on("roleDelete", async roleDelete =>{ //logs
  if(LogsServeurSystème == true){

      const fetchAuditsLogs = await roleDelete.guild.fetchAuditLogs({
        type: 'ROLE_DELETE',
        limit: '1'
      })
      const LastedRoledelete = fetchAuditsLogs.entries.first();

    const LogsDelete = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Système de logs du serveur sur l\'information suivante : Rôle suprimer.')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Supp rôle : ${LastedRoledelete.executor} \n Date de création du rôle : <t:${Math.round(roleDelete.createdAt / 1000)}:R> \n Id du rôle: ${roleDelete.id}`, inline: false},
        { name: 'Nom du rôle ', value: `\`\`\`${roleDelete.name}\`\`\``, inline: false},
  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [LogsDelete]})
  }
});



bot.on("messageCreate", async message =>{ //ban
    if(message.content.startsWith(prefix + "ban")){
      let args = message.content.trim().split(/ +/g);
      if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(message.author.username + " Vous n'avez pas la permisssion pour effectuer cette commande.")
      const member = message.mentions.members.first()
      if(!member) return message.channel.send(" Veuiller mentionné un membre à ban.")
      if(member.id === message.guild.ownerId) return message.channel.send("Vous ne pouvez par ban cette utilisateur.")
      if(message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerId) return message.channel.send("Vous ne pouvez pas ban ce membre.")
      const reason = args.slice(2).join(' ')
      if(!reason) return message.channel.send("Merci de préciser un raison !")
      try {
        member.ban({days : 0, reason: reason})
        console.log(`Membre ${member} banni `);
        } catch (err) {
          console.warn(err)
          return message.channel.send("Erreur de ban merci de precisez un membre valable.");
        }
      const embeds = new MessageEmbed()
      .setColor('#E74C3C')
    .setTitle('Ban User')
    .setDescription('Ban par ' + message.author.username)
    .setThumbnail('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png')
    .addFields(
      { name: 'Objet :', value: `Ban de l'utilisateur ${member} du serveur.` },
      { name: 'Raison :', value: reason, inline: false },
)
      message.channel.send({embeds: [embeds]})

    }
  });

  bot.on("messageCreate", async message =>{ //sondage
    if(message.content.startsWith(prefix + "tempban")){
      let args = message.content.trim().split(/ +/g);
      if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(message.author.username + " Vous n'avez pas la permisssion pour effectuer cette commande.")
      const member = message.mentions.members.first()
      if(!member) return message.channel.send(" Veuiller mentionné un membre à ban.")
      if(member.id === message.guild.ownerId) return message.channel.send("Vous ne pouvez par ban cette utilisateur.")
      if(message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerId) return message.channel.send("Vous ne pouvez pas ban ce membre.")
      const duration = args.slice(2, 3).join(' ')
      if(!duration) return message.channel.send("Merci de préciser une durée !")
      if(duration !== "1" && duration !== "2" && duration !== "3" && duration !== "4" && duration !== "5" && duration !== "6" && duration !== "7" && duration !== "8" && duration !== "9" && duration !== "10" && duration !== "11" && duration !== "12" && duration !== "13" && duration !== "14" && duration !== "15" && duration !== "16" && duration !== "17" && duration !== "18" && duration !== "19" && duration !== "20" && duration !== "21" && duration !== "22" && duration !== "23" && duration !== "24" 
      && duration !== "25" && duration !== "26"&& duration !== "27"&& duration !== "28"&& duration !== "29"&& duration !== "30"&& duration !== "31"&& duration !== "32"&& duration !== "33"&& duration !== "34"&& duration !== "35"&& duration !== "36"&& duration !== "37"&& duration !== "38"&& duration !== "38"&& duration !== "39"&& duration !== "40"&& duration !== "41"&& duration !== "42"&& duration !== "43"&& duration !== "44"&& duration !== "45"&& duration !== "46"&& duration !== "47"&& duration !== "48"&& duration !== "49"&& duration !== "50") return message.channel.send("Merci de préciser une durée valable comprise entre 1 et 50 jours !")
      const reason = args.slice(3).join(' ')
      if(!reason) return message.channel.send("Merci de préciser un raison !")
      const time = duration * 86400000
      try {
      var membredeban = member.id
      member.ban({days : 0, reason: reason})
      console.log(`Membre ${member} banni pour ${time} miliseconde , (${duration} jours)`);
      } catch (err) {
        console.warn(err)
        return message.channel.send("Erreur de ban merci de precisez un membre valable.");
      }
      console.log(`Membre ${member} va etre débanni dans ${time} miliseconde , (${duration} jours)`);
      setTimeout(() => {
        try {
          message.guild.members.unban(membredeban)
          } catch (err) {console.warn("Impossible de deban le membre" + member + ".Erreur 17")}
      },time)
      const embeds = new MessageEmbed()
      .setColor('#E74C3C')
    .setTitle('Ban User')
    .setDescription('Ban par ' + message.author.username)
    .setThumbnail('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png')
    .addFields(
      { name: 'Objet :', value: `Ban de l'utilisateur ${member} du serveur.`, inline: false },
      { name: 'Raison :', value: reason, inline: true },
      { name: 'Durée :', value: duration + " Jours", inline: true },
)
      message.channel.send({embeds: [embeds]})

    }
  });



bot.on("messageCreate", async message =>{
  if(message.content.slice() == prefix){
    message.channel.send("Que se passe t'il ? Qui me demande ?")
  }
})

bot.on("messageCreate", async message =>{
  if(LogsServeurSystème == true){
    if(Goto == true){
      const Logsnews = new MessageEmbed()
      .setColor('#34495E')
      .setTitle('Logs du Serveur')
      .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
      .setDescription('Sytème de Logs activer ! ')
      .setThumbnail('https://pandorafms.com/blog/wp-content/uploads/2020/12/567-Logs_-qu%C3%A9-son-y-por-qu%C3%A9-monitorizarlos.jpg')
      .addFields(
        // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
        { name: 'Information', value: `Le système de logs est defini sur ce salon, ce salon risque d'être surcharger en message, désactiver bien le notifications 🔔`, inline: false},

  )
      .setTimestamp()
      .setFooter({ text: 'Logs du Serveur', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
      let Channellogs = bot.channels.cache.get(salonlogs);
      if(Channellogs == undefined) return console.log("Channellogs is undefined")
      Channellogs.send({embeds: [Logsnews]})
      Goto = false
    }
  }
})


// bot.on("messageCreate", async message =>{ //sondage
//   if(message.content.startsWith(prefix + "deban")){
//     let args = message.content.trim().split(/ +/g);
//     if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(message.author.username + " Vous n'avez pas la permisssion pour effectuer cette commande.")
//     const member = args.slice(1, 2).join(' ')
//     let user = await bot.users.fetch(member);
//     console.log(user)
//     if(!member) return message.channel.send(" Veuiller mentionné un id de membre à deban.")
//     const reason = args.slice(2).join(' ')
//     if(!reason) return message.channel.send("Merci de préciser un raison !")
//     try {
//       if(!user) return message.channel.send("L'utilisateur n'existe pas !")
//       message.guild.members.unban({user: user, reason: reason}) 
//       } catch (err) {
//         console.warn(err)
//         message.channel.send("Erreur de ban merci de precisez un membre valable.")
//         return;
//       }
//     const embeds = new MessageEmbed()
//     .setColor('#E74C3C')
//   .setTitle('DeBan User')
//   .setDescription('Deban par ' + message.author.username)
//   .setThumbnail('https://wikiimg.tojsiabtv.com/wikipedia/commons/thumb/b/b2/383-waving-hand-1.svg/200px-383-waving-hand-1.svg.png')
//   .addFields(
//     { name: 'Objet :', value: `DeBan de l'utilisateur <@${member}> du serveur.`, inline: false },
//     { name: 'Raison :', value: reason, inline: true },
// )
//     message.channel.send({embeds: [embeds]})

//   }
// });

bot.on("messageCreate", async message =>{ //sondage
    if(message.content.startsWith(prefix + "ping")){
      if (talkedRecently.has(message.author.id)) {
      message.channel.send("Merci de patienter 1 minute avant de pouvoir réutiliser la commande <@" + message.author.id + ">");
      }
      else{
      const endTimeDB = Date.now()
      const startTime = Date.now()

      await message.channel.send(`En cours...`).then(async msg => {
        
        const endTime = Date.now()

        try{
          await msg.edit(`\`Latence du bot\` : ${endTime - startTime}ms\n\`Latence de l'API de Discord\` : ${bot.ws.ping}ms\n\`Latence de la base de données\` : ${endTimeDB - startTime}ms`)
        } catch (err) {
          await message.editReply(`\`Latence du bot\` : ${endTime - startTime}ms\n\`Latence de l'API de Discord\` : ${bot.ws.ping}ms\n\`Latence de la base de données\` : ${endTimeDB - endTime}ms`)
        }
      })
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        // Removes the user from the set after a minute
        talkedRecently.delete(message.author.id);
      }, 60000);
      }
    }
  });


  bot.on("messageCreate", async message =>{ //sondage
    if(message.content.startsWith(prefix + "Panel54251231213")){
      const row = new MessageActionRow()
      .addComponents(
        new MessageSelectMenu()
          .setCustomId('test')
          .setPlaceholder('Choisie')
          // .setDisabled(true)
          .addOptions([
            {
              label: 'Première Option',
              value: '1',
              description: "C'est un test 1️⃣",
            },
            {
              label: 'Deuxième Option',
              value: '2',
              description: "C'est un test 2 1️⃣",
            },
            {
              label: 'Toisième Option',
              value: '3',
              description: "C'est un test 3 1️⃣",
            }
          ])
      )

      msg = await message.channel.send({
        content: "Choisie !",
        components: [row]
      });

      // if (Interaction.isSelectMenu()) {
      //   await Interaction.deferUpdate();
      //   Interaction.reply({content: "Ton choix est" + Interaction.values[0],})
      // }

      const filter = (Interaction) => 
      Interaction.isSelectMenu() && 
      Interaction.user.id === message.author.id;

      const collector = message.channel.createMessageComponentCollector({
        filter,
        max: "3",
      });

      collector.on('collect', async(collected) => {
        const value = collected.values[0];

        collected.deferUpdate(); 
        if(value == '1') msg.edit("Choix 1")
        if(value == '2') msg.edit("Choix 2")
        if(value == '3') msg.edit("Choix 3")
      })
    }
      
    });







  bot.on("messageCreate", async message =>{ //sondage
    if(message.channel.id == SalonHacked){
      msg = message.content.slice()
      if(msg !== "f!hacked")
          if(message.author.id !== botId){
          message.delete()
          msg1 = await message.channel.send(`<@${message.author.id}>, tu ne peux écrire uniquement les commandes f!hacked ici`)
          setTimeout(() =>{
            msg1.delete()
          },3000)
          }
        }
      
    });






    //  if (talkedRecently.has(message.author.id)) {
    //   message.channel.send("Merci de patienter 10 secondes avant de pouvoir réutiliser la commande <@" + message.author.id + ">");
    //  }
    // else{

    //   talkedRecently.add(message.author.id);
    //   setTimeout(() => {
    //     // Removes the user from the set after a minute
    //     talkedRecently.delete(message.author.id);
    //   }, 10000);
    // }
    


//     bot.on("message", async message => {
//       if(message.content.startsWith(prefix + "settings")) { 
//         if (talkedRecently.has(message.author.id)) {
//             message.channel.send("Pour eviter un Overstack du système merci de patienter 1 min avant de reutiliser la commande !");
//         }
//         else{
//         if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send(message.author.username +" Vous n'avez pas la permisssion pour effectuer cette commande. ")
//         var FindeConfig = false
//         var channelmessage = message.channel
//         var ModeAntiInsulte = false
//         var ModeAntiSpam = false
//         var ModeChannelBienvenue = false
//         var Author = message.author.id
//         var ModelogsServeur = false
    
//         const Rowdébut = new MessageActionRow()
//           .addComponents(
//             new MessageButton()
//             .setCustomId("Start")
//             .setLabel('Commancer')
//             .setStyle('SUCCESS')
//           )
//           .addComponents(
//             new MessageButton()
//             .setCustomId("Cancel")
//             .setLabel('Cancel')
//             .setStyle('DANGER')
//           )
//           .addComponents(
//             new MessageButton()
//             .setLabel('Notre site')
//             .setURL('https://sites.google.com/view/flipflopbot/accueil')
//             .setStyle('LINK')
//           )

//           const row = new MessageActionRow()
//       .addComponents(
//         new MessageSelectMenu()
//           .setCustomId('test1')
//           .setPlaceholder('Preciser votre choix')
//           // .setDisabled(true)
//           .addOptions([
//             {
//               label: '✅ Activer',
//               value: 'AntiInsulteOn',
//               description: "Activer le Mode anti-Insulte",
//             },
//             {
//               label: '❌ Desactiver',
//               value: 'AntiInsulteOff',
//               description: "Desactiver le mode anti-Insulte",
//             },
//           ])
//       )

//       const row2 = new MessageActionRow()
//       .addComponents(
//         new MessageSelectMenu()
//           .setCustomId('test2')
//           .setPlaceholder('Preciser votre choix')
//           // .setDisabled(true)
//           .addOptions([
//             {
//               label: '✅ Activer',
//               value: 'SpamModeOn',
//               description: "Activer le Mode anti-Spam",
//             },
//             {
//               label: '❌ Desactiver',
//               value: 'SpamModeOff',
//               description: "Desactiver le mode anti-Spam",
//             },
//           ])
//       )

      
//           const Début = new MessageEmbed()
//             .setColor('#1ABC9C')
//             .setTitle('⚙ SetBot ⚙')
//             .setURL('https://sites.google.com/view/flipflopbot/accueil')
//             .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
//             .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 Pour fermer les settings tapez :`Cancel`')
//             .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
//             .addFields(
//               { name: '⚙ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
//               { name: '⚙ | Sytème anti-Spam', value: `Systsème qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
//               { name: '⚙ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
//               { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
//         )
//             .setTimestamp()
//             .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
            
    
//             const Anti_insulte = new MessageEmbed()
//             .setColor('#1ABC9C')
//             .setTitle('⚙ SetBot ⚙')
//             .setURL('https://sites.google.com/view/flipflopbot/accueil')
//             .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
//             .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 Pour fermer les settings tapez :`Cancel`')
//             .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
//             .addFields(
//               { name: '⚙ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
//               { name: '⚙ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
//               { name: '⚙ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
//               { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
//               { name: 'Pour fermer les settings tapez :', value: `\`Cancel\`` },
//         )
//             .setTimestamp()
//             .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
    
//             const Anti_Spam = new MessageEmbed()
//             .setColor('#1ABC9C')
//             .setTitle('⚙ SetBot ⚙')
//             .setURL('https://sites.google.com/view/flipflopbot/accueil')
//             .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
//             .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 Pour fermer les settings tapez :`Cancel`')
//             .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
//             .addFields(
//               { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
//               { name: '⚙ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
//               { name: '⚙ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
//               { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
//               { name: 'Pour fermer les settings tapez :', value: `\`Cancel\`` },
//         )
//             .setTimestamp()
//             .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
    
//             const MessagedeBienvenue = new MessageEmbed()
//             .setColor('#1ABC9C')
//             .setTitle('⚙ SetBot ⚙')
//             .setURL('https://sites.google.com/view/flipflopbot/accueil')
//             .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
//             .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 Pour fermer les settings tapez :`Cancel`')
//             .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
//             .addFields(
//               { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
//               { name: '✅ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
//               { name: '⚙ | Sytème Message de Bienvenue', value: '**Ecrivez `Activer [id salon] [Message de bienvuenue]` ou `Inactif`**, pour regler le mode message de bienvenue.' },
//               { name: '⚙ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },

//         )
//             .setTimestamp()
//             .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
    
    
//             const LogsInfo = new MessageEmbed()
//             .setColor('#1ABC9C')
//             .setTitle('⚙ SetBot ⚙')
//             .setURL('https://sites.google.com/view/flipflopbot/accueil')
//             .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
//             .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 Pour fermer les settings tapez :`Cancel`')
//             .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
//             .addFields(
//               { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
//               { name: '✅ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
//               { name: '✅ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
//               { name: '⚙ | Logs du serveurs', value: '**Ecrivez `Activer [id salon de logs]` ou `Desactiver`**, pour regler le mode logs.' },
//         )
//             .setTimestamp()
//             .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
    
//             const Fin = new MessageEmbed()
//             .setColor('#1ABC9C')
//             .setTitle('⚙ SetBot ⚙')
//             .setURL('https://sites.google.com/view/flipflopbot/accueil')
//             .setAuthor({ name: 'FlipFlopSet', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
//             .setDescription('Parametrer le bot pour le rendre actif et faire les tache que vous avez parametrer 🛠 Pour fermer les settings tapez :`Cancel`')
//             .setThumbnail('https://img1.freepng.fr/20180602/cxj/kisspng-logo-businessperson-portfolio-company-settings-5b1322afa23447.6505081315279807196644.jpg')
//             .addFields(
//               { name: '✅ | Sytème anti-Insulte', value: `Système qui bloque les insultes et mutes les utilisateurs responsable.` },
//               { name: '✅ | Sytème anti-Spam', value: `Système qui bloque le spam d'un utilisateurs et le mute si le spam est trop important.` },
//               { name: '✅ | Sytème Message de Bienvenue', value: `Message de bienvenue personnalisé dans un salon.` },
//               { name: '✅ | Logs du serveurs', value: `Logs du serveur qui informe le serveur quand differente action son executer.` },
//         )
//             .setTimestamp()
//             .setFooter({ text: 'SetBot Config', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });
    
    
//           msg = await message.channel.send({
//             embeds: [Début],
//             components: [Rowdébut],
//       //      ephemeral: true, //uniquement pour les message /...
//             })
    
    
    
//         const filter = (ButtonInteraction) => {
//           return message.author.id === ButtonInteraction.user.id
//         }
    
//         var collector = message.channel.createMessageComponentCollector({
//          filter,
//           max: 1,
//           time: 10000 * 20
//         })
      
//         collector.on('end', async (Collection) => {
//           Collection.forEach((click) => {
//             console.log(click.user.id, click.customId)
//             if(message.author.id !== click.user.id) return;
//           })
        
    
//         if (Collection.first()?.customId === 'Cancel') {
//           msg.delete()
//         }
    
    
//         if (Collection.first()?.customId === 'Start') {
//           msg.edit({
//             embeds: [Anti_insulte],
//             components: [row]
//           })   
//           ModeAntiInsulte = true
//         }
//         })
    
//         // setTimeout(() => {
//         //   msg.delete()
//         // }, 120000)
    
//         const filter2 = (Interaction) => 
//       Interaction.isSelectMenu() && 
//       Interaction.user.id === message.author.id;

//       const collector2 = message.channel.createMessageComponentCollector({
//         filter2,
//         max: "2",
//         time: 60000,
//       });

//       collector2.on('collect', async (collected) => {
//         const value = collected.values;
//         collected.deferUpdate(); 
//         if(value == 'AntiInsulteOn') {
//               AntiInsulte = true
//              msgOn = await message.channel.send("Système anti-Insulte On 🔒")
//              setTimeout(() => {
//               msg.edit({
//                 embeds: [Anti_Spam],
//                 components: [row2],
//                })
//                ModeAntiSpam = true
//             }, 100)
//              setTimeout(() => {
//               msgOn.delete()
//             }, 3000)
//             ModeAntiInsulte = false
//          }
//         else if(value == 'AntiInsuleOff'){
//               AntiInsulte = false
//              msgOnn = await message.channel.send("Système anti-Insulte Desactiver 🔓")
//              setTimeout(() => {
//               msg.edit({
//                 embeds: [Anti_Spam],
//                 components: [row2],
//                })
//                ModeAntiSpam = true
//             }, 100)
//              setTimeout(() => {
//               msgOnn.delete()
//             }, 3000)
//             ModeAntiInsulte = false
//             }
//           setTimeout(() =>{
//             if(ModeAntiInsulte == true){
//               msg.delete()
//               message.channel.send("Fin de Settings ! 🛠")
//             }
                  
//           },60000)
//       })
          
//       bot.on("messageCreate", async message => {
//         if(ModeAntiSpam !== true){
//           const filter3 = (Interaction) => 
//           Interaction.isSelectMenu() && 
//           Interaction.user.id === message.author.id;
    
//           const collector3 = message.channel.createMessageComponentCollector({
//             filter3,
//             max: "2",
//             time: 60000,
//           });
          

//           collector3.on('collect', async(collected) => {
//             const value = collected.values;
//             collected.deferUpdate(); 
    
           
//             if(value == 'SpamModeOn') {
//               if(Author == collected.user.id){
//               ModeAntiSpam = false
//               Spammode = true
//              msgOn2 = await message.channel.send("Système anti-Spam On 🔒")
//              msg.edit({
//               embeds: [MessagedeBienvenue],
//               components: [],
//              })
//              setTimeout(() => {
//               msgOn2.delete()
//             }, 3000)  
//             ModeChannelBienvenue = true
//               }
//             }
//             if(value == 'SpamModeOff'){
//               if(Author == collected.user.id){
//               ModeAntiSpam = false
//                   Spammode = false
//                  msgOnn2 = await message.channel.send("Système anti-Spam Desactiver 🔓")
//                  msg.edit({
//                   embeds: [MessagedeBienvenue],
//                   components: [],
//                  })
//                  setTimeout(() => {
//                   msgOnn2.delete()
//                 }, 3000)
//               ModeChannelBienvenue = true
//               }
//             }
//             setTimeout(() =>{
//               if(ModeAntiSpam == true){
//                 msg.delete()
//                 message.channel.send("Fin de Settings ! 🛠")
//               }
                    
//             },60000)
//           })
//         }
//       })
    
//       bot.on("messageCreate", async message => {
//         if(message.content.startsWith("Cancel")){
//           if(channelmessage !== message.channel) return ;
// //          if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
//           if(FindeConfig == false){
//             ModelogsServeur = false
//             ModeChannelBienvenue = false
//             ModeAntiInsulte = false
//             ModeAntiSpam = false
//             msg.delete()
//             message.channel.send("Fin de Settings ! Annulation ! 🛠")
            
//           }
//         }
//       })

    
//         bot.on("messageCreate", async message => {
//           if(ModeChannelBienvenue == true){
//             msgChannelBienvenue = message.content.slice()
//             if(msgChannelBienvenue.startsWith("Activer")){
//               if(channelmessage !== message.channel) return ;
//               if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
//               let args = message.content.trim().split(/ +/g);
//               const msgChan2 = args.slice(1, 2).join(" ");
//               const msgChan3 = args.slice(2).join(" ");
//               if(!msgChan2 && !msgChan3) return message.channel.send("Merci d'écrire correctement : `Activer [id salon] [Message de bienvuenue]`")
//               message.delete()
//               ModeChannelBienvenue = false
//              SalonDeBienvenue = msgChan2
//              Messagebienvenue = msgChan3
//              msgOn3 = await message.channel.send('Le salon de bienvenue à été defini sur : \n' + SalonDeBienvenue  + "\n" + 'Le message de bienvenue à été defini sur : \n' + Messagebienvenue)
//              console.log("L'utilisateur " + `${message.guild.name}` + " à defini : \n -" + Messagebienvenue + "\n -" + SalonDeBienvenue )
//              msg.edit({
//               embeds: [LogsInfo],
//               components: [],
//              })
//              ModelogsServeur = true
//              setTimeout(() => {
//               msgOn3.delete()
//             }, 6000)
//             }
//             if(msgChannelBienvenue == "Inactif"){
//               if(channelmessage !== message.channel) return ;
//               if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
//               ModeChannelBienvenue = false
//               message.delete()
//               msg.edit({
//               embeds: [LogsInfo],
//               components: [],
//              })
//              ModelogsServeur = true
//             }
//           }
//         })
    
//         bot.on("messageCreate", async message => {
//           if(ModelogsServeur == true){
//             msgLogServeur = message.content.slice()
//             if(msgLogServeur.startsWith("Activer")){
//               if(channelmessage !== message.channel) return ;
//               if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
//               msg.edit({
//                 embeds: [Fin]
//               })
    
//               let args = message.content.trim().split(/ +/g);
//               const mslogs = args.slice(1, 2).join(" ");
//               if(!mslogs) return message.channel.send("Merci d'écrire correctement : `Activer [id salon log] `");
//               message.delete()
//               ModelogsServeur = false
//               LogsServeurSystème = true
//               salonlogs = mslogs
//               mslogs6 = await message.channel.send("Système de logs activer dans le salon : " + mslogs + " ❗");
//              message.channel.send("Serveur configurer ! 🛠")
//              FindeConfig = true
//              setTimeout(() => {
//               mslogs6.delete()
//             }, 6000)
//             }
//             if(msgLogServeur.startsWith("Desactiver")){
//               if(channelmessage !== message.channel) return ;
//               if(Author !== message.author.id) return message.reply("Vous n'êtes pas l'auteur du SetBot !");
//               msg.edit({
//                 embeds: [Fin]
//               })
//               ModelogsServeur = false
//               message.delete()
//               LogsServeurSystème = false
//               mslogs7 = await message.channel.send("Système de logs desactiver ❗ ")
//               setTimeout(() => {
//                 mslogs7.delete()
//               }, 6000)
//              message.channel.send("Serveur configurer ! 🛠")
//              FindeConfig = true
//             }
//           }
//         })
//       talkedRecently.add(message.author.id);
//       setTimeout(() => {
//         // Removes the user from the set after a minute
//         talkedRecently.delete(message.author.id);
//       }, 90000);
//     }
//     }
//     });




  //   bot.on("messageCreate", async message =>{
  //     if(message.content.startsWith(prefix + "level")){
  //     const Embed = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆 \`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[————————————————————]0%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     const Embed1 = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆\`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[■■■■————————————————]10%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     const Embed2 = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆\`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[■■■■■■■■——————————————]20%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     const Embed3 = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆\`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[■■■■■■■■■■■■———————————]50%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     const Embed4 = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆\`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[■■■■■■■■■■■■■■■■——————]70%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     const Embed5 = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆\`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[■■■■■■■■■■■■■■■■■■■■——]90%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     const Embed6 = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆\`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[■■■■■■■■■■■■■■■■■■■■■■■■]100%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     const Embed7 = new MessageEmbed()
  //     .setColor('#34495E')
  //     .setTitle('Level')
  //     .setAuthor({ name: 'FlipFlop', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80', url: 'https://sites.google.com/view/flipflopbot/accueil' })
  //     .setDescription('Votre level personnel')
  //     .addFields(
  //       // { name: 'Message delete', value: `Un nouveau message à été supprimer.`, inline: false },
  //       { name: 'Level :', value: `\`\`\`${Niveaux} 🏆\`\`\``, inline: false},
  //       { name: 'Stats', value: `\`\`\`[————————————————————]0%\`\`\``, inline: false},
  // )
  //     .setTimestamp()
  //     .setFooter({ text: 'Level', iconURL: 'https://cdn.discordapp.com/avatars/938830395078758431/32567837ee74194c3c21f584e4322137.png?size=80' });

  //     msg = await message.channel.send({embeds: [Embed]})

  //     setTimeout(() =>{
  //       msg.edit({embeds: [Embed1]})
  //       setTimeout(() =>{
  //         msg.edit({embeds: [Embed2]})
  //         setTimeout(() =>{
  //           msg.edit({embeds: [Embed3]})
  //           setTimeout(() =>{
  //             msg.edit({embeds: [Embed4]})
  //             setTimeout(() =>{
  //               msg.edit({embeds: [Embed5]})
  //               setTimeout(() =>{
  //                 msg.edit({embeds: [Embed6]})
  //                 setTimeout(() =>{
  //                   Niveaux++
  //                   msg.edit({embeds: [Embed7]})
  //                 },1000)
  //               },1000)
  //             },1000)
  //           },1000)
  //         },1000)
  //       },1000)
  //     },1000)
  //     }
  //   })


























              // hacked


bot.on("message", async message => {
  if(message.content === prefix + "hacked") { 
    if(message.channel.id !== SalonHacked) return message.channel.send("La commande ne peut pas être utiliser dans ce salon !");
    if (talkedRecently.has(message.author.id)) {
      message.channel.send("Merci de patienter 10 secondes avant de pouvoir réutiliser la commande <@" + message.author.id + ">");
    } else {
    let tab = [
      `GG ${message.author} Tu à trouver ! Tu avait 1 chance sur 100  \n https://media.giphy.com/media/TSvutsTRkt1AkNpLwj/giphy.gif `,
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "1 chance sur 100  \nhttps://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif",
      "https://media.giphy.com/media/yHEvgeaTIsEJIW3l2N/giphy.gif"
      
    ]
    let index = Math.floor(Math.random() * (tab.length))
    message.channel.send(tab[index])

  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
  }, 10000);
  }
}
});

bot.login(token);

