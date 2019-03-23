const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "<<"
 
client.login("NTU4NzczNjc1MzgyNTM4MjU1.D3d0ow.0tcL6Z5j9GTUmfJxtCbst7zxdNU")

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("commencer sa vie")
});

client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});

client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});

client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    };
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            });
        };
    };
});

client.on('message', async message => {
 
    if(message.content === "Slt"){
        message.reply("Salut :wave:")
        console.log("Le bot dit bonjour")
    }
 
    if(message.content === prefix + "story"){
        var help_embed = new Discord.RichEmbed()
        .setColor("GREY")
        .setTitle(":tv: -Histoire (voir MP)")
        message.member.send("Une catastrophe mondiale est arrivé , un virus à été libéré, les chances de survie actuelle après être infecté sont de -10% . 20 ans se sont écoulés et la société à disparu , l'argent  avec , maintenant les troc se font en échanges de balle.Les Hommes :   sont devenu de plus en plus dangereux au fil des c'est dernière année . Leurs seul objectif survivre   Les Militaire :  dispose de camp armer et protégées, il mène une vie assez stable.Les Lucioles :  un groupe rebelle , survive entre eux et se font traquer mais dispose de beaucoup de moyen.Les survivants : sont mis de côtes et son vu comme des pilleur à vous de choisir votre camps .Les véhicules et l'électricité sont les sources de convoitise par tous , il deviennent de plus en plus compliquer à trouver .Les infectés : Il existe sous différentes formes mais je ne vous conseille de ne jamais tomber sur eux. À vous de faire vos choix et de faire confiance ou non au gens que vous croiserez.Les structures ne sont pas trés stable et cela est dangeureux . les ruines des anciens batiments  sont assez résistente pas comme nos camp de fortune");
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === "cv"){
        message.reply("SUPER !!!")
        console.log("Le bot dit bonjour")
    }
 
    if(message.content === prefix + "zombie"){
        var help_embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle(":smiling_imp: -Zombie (voir MP)")
        message.member.send("L'infection est du à un champignon, le cordiseps, ultra aggresif et transmis par le sang. Voici les différents infecté sur lesquels vous tomberez malgres vous.L'infecter : ces un humain qui ces transformée il y a peu de temps , il son encore rapide et vif . Il vous vois très bien et peuvent très bien vous courir après. Vie : 100Le zombie : un infecté depuis au moins 1 ans , ils sont assez lent mais se trouve souvent en petit groupe et reste tout de même dangereux.Vie : 100Le claqueur : infecté depuis au moins 10 ans , il épaisse couche recouvre son visage, il est aveugle mais entend très bien. Si vous entend vous le reconnaîtrez à son claquement de dent strident, il est très rapide mais fragile. Vie 80 ( dégât + 5 par apport au autre)Le colosse : infecté depuis 20 ans, on dis que personne ne peut en tuer un. Une épaisse couche recouvre tout son corp sauf son visage , la couche qui recouvrait son visage se détache avec le temps, il voit très bien et entend également bien. Il est incroyablement puissant et résistant, on dis qu'il peut casser un mur en 1 coup et renversé les voiture comme du papier.Vie : 400 (dégât + 20 par apport au autre , il est rare)");
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === ""){
        message.reply("")
        console.log("")
    }
 
    if(message.content === prefix + "profil"){
        var help_embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle(":grin: -Profil (voir MP)")
        message.member.send("Avant de créé votre profil , il faut que votre fiche soi validé r>CreateProfile : pour créé votre profil Le robot va vous dire de choisir votre nom Puis il va vous demandez de faire ta description physiqueUne fois fait faite cette commande :  r>editprofile  , qui va permettre de mieux détaillé votre profil RP . Age : donner l'âge de votre personnage r>editprofile Gender : si vous êtes en couple ou non . Si oui mettais le nom de votre amour r>editprofile Name : votre nom et prénom r>editprofile Race : votre sexe r>editprofile longDesc : l'histoire de votre personnage r>editprofile title : est votre métier");
        message.channel.send(help_embed);
    }
 
});const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "<<"
 
client.login("NTU4NzczNjc1MzgyNTM4MjU1.D3d0ow.0tcL6Z5j9GTUmfJxtCbst7zxdNU")

client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("commencer sa vie")
});

client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'kick'){
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send("**"+member.user.username + '** a été exclu :white_check_mark:')
    }
});

client.on('message',message =>{
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLocaleLowerCase() === prefix + 'ban'){
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("Veuillez mentionner un utilisateur :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("Je ne peux pas bannir cet utilisateur :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send("**"+member.user.username + '** a été banni :white_check_mark:')
    }
});

client.on("message", message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let count = args[1]
        if (!count) return message.channel.send("Veuillez indiquer un nombre de messages à supprimer")
        if (isNaN(count)) return message.channel.send("Veuillez indiquer un nombre valide")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(parseInt(count) + 1)
    };
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (member.highestRole.calculatedPosition >= message.guild.me.highestRole.calculatedPosition || member.id === message.guild.ownerID) return message.channel.send("Je ne peux pas mute ce membre")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then((role) => {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(channel => {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' a été mute :white_check_mark:')
            });
        };
    };
});

client.on('message', async message => {
 
    if(message.content === "Slt"){
        message.reply("Salut :wave:")
        console.log("Le bot dit bonjour")
    }
 
    if(message.content === prefix + "story"){
        var help_embed = new Discord.RichEmbed()
        .setColor("GREY")
        .setTitle(":tv: -Histoire (voir MP)")
        message.member.send("Une catastrophe mondiale est arrivé , un virus à été libéré, les chances de survie actuelle après être infecté sont de -10% . 20 ans se sont écoulés et la société à disparu , l'argent  avec , maintenant les troc se font en échanges de balle.Les Hommes :   sont devenu de plus en plus dangereux au fil des c'est dernière année . Leurs seul objectif survivre   Les Militaire :  dispose de camp armer et protégées, il mène une vie assez stable.Les Lucioles :  un groupe rebelle , survive entre eux et se font traquer mais dispose de beaucoup de moyen.Les survivants : sont mis de côtes et son vu comme des pilleur à vous de choisir votre camps .Les véhicules et l'électricité sont les sources de convoitise par tous , il deviennent de plus en plus compliquer à trouver .Les infectés : Il existe sous différentes formes mais je ne vous conseille de ne jamais tomber sur eux. À vous de faire vos choix et de faire confiance ou non au gens que vous croiserez.Les structures ne sont pas trés stable et cela est dangeureux . les ruines des anciens batiments  sont assez résistente pas comme nos camp de fortune");
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === "cv"){
        message.reply("SUPER !!!")
        console.log("Le bot dit bonjour")
    }
 
    if(message.content === prefix + "zombie"){
        var help_embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle(":smiling_imp: -Zombie (voir MP)")
        message.member.send("L'infection est du à un champignon, le cordiseps, ultra aggresif et transmis par le sang. Voici les différents infecté sur lesquels vous tomberez malgres vous.L'infecter : ces un humain qui ces transformée il y a peu de temps , il son encore rapide et vif . Il vous vois très bien et peuvent très bien vous courir après. Vie : 100Le zombie : un infecté depuis au moins 1 ans , ils sont assez lent mais se trouve souvent en petit groupe et reste tout de même dangereux.Vie : 100Le claqueur : infecté depuis au moins 10 ans , il épaisse couche recouvre son visage, il est aveugle mais entend très bien. Si vous entend vous le reconnaîtrez à son claquement de dent strident, il est très rapide mais fragile. Vie 80 ( dégât + 5 par apport au autre)Le colosse : infecté depuis 20 ans, on dis que personne ne peut en tuer un. Une épaisse couche recouvre tout son corp sauf son visage , la couche qui recouvrait son visage se détache avec le temps, il voit très bien et entend également bien. Il est incroyablement puissant et résistant, on dis qu'il peut casser un mur en 1 coup et renversé les voiture comme du papier.Vie : 400 (dégât + 20 par apport au autre , il est rare)");
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === ""){
        message.reply("")
        console.log("")
    }
 
    if(message.content === prefix + "profil"){
        var help_embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setTitle(":grin: -Profil (voir MP)")
        message.member.send("Avant de créé votre profil , il faut que votre fiche soi validé r>CreateProfile : pour créé votre profil Le robot va vous dire de choisir votre nom Puis il va vous demandez de faire ta description physiqueUne fois fait faite cette commande :  r>editprofile  , qui va permettre de mieux détaillé votre profil RP . Age : donner l'âge de votre personnage r>editprofile Gender : si vous êtes en couple ou non . Si oui mettais le nom de votre amour r>editprofile Name : votre nom et prénom r>editprofile Race : votre sexe r>editprofile longDesc : l'histoire de votre personnage r>editprofile title : est votre métier");
        message.channel.send(help_embed);
    }
 
});
