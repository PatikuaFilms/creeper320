const Discord = require('discord.js');
 
const client = new Discord.Client();
 
var prefix = "*"
 
client.login("NTU2NzczODQxMzkzODExNDU2.D3dsvQ.B1_UGFAEghH50h0BSYu1ynfTA2U")
 
client.on("ready", () =>{
    console.log("je suis prêt")
    client.user.setGame("etre en week-end")
});

client.on('message', async message => {
 
    if(message.content === "Slt"){
        message.reply("Salut ma petite frite")
        console.log("Le bot dit bonjour")
    }
 
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("GREY")
        .setTitle(":page_facing_up: -Information")
        .setDescription("** *staff ** pour voir la liste du staff \n" + "** *animation ** pour voir l'avancement de mes animation en pourcentage\n" + "** *candidature ** pour voir si le staff \n" + "**--userinfo [mention]** Pour voir le profil d'un joueur sur le serveur")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === "Yo"){
        message.reply("Hola")
        console.log("Le bot dit Hola")
    }
 
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("RED")
        .setTitle(":video_game: -Jeux")
        .setDescription("** *8ball [Question]** Poser une question et le bot vous répondra \n" + "** *blague** Pour avoir une blague \n" + "** *pf** Pour faire un pile ou face \n" + "** *lancer** Pour lancer un dé \n" + "**--speakerphone** Pour lancer un appel avec le bot \n" + "**--deathbattle [pseudo]** pour faire un FIGHT avec un joueur \n" + "**--spinner [red,orange,yellow,green,mint,blue,purple,pink]** Pour faire tourner un Hand-Spinneur (faites le meilleur score) Pour voir les meilleures score faites --spinner scores \n" + "**--ship [pseudo] [pseudo]** Pour voir si vous êtes compatibles en amour \n" + "**--friendscore [pseudo]** Pour voir si vous êtes compatible en amitié \n" + "** *bien [objet]** Savoir si un objet est bien ou nul (pour Michel bien sûr)")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === "cv"){
        message.reply("Bien comme dab merci")
        console.log("Le bot dit cool" )
    }
 
    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
        .setColor("BLUE")
        .setTitle(":tophat: -Modération")
        .setDescription("** *ban [pseudo]** Pour bannir une personne du serveur \n" + "** *clear [nombres de messges]** Pour effacer un certain nombres de messages \n" + "** *mute [pseudo]** Pour mute une personne sur le serveur \n" + "** *kick [pseudo]** pour expluser une personne du serveur")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
});


client.on('message', async message => {
 
    if(message.content === "je t'aime"){
        message.reply("Oh, merci ma petite frite")
        console.log("mrc mrc")
    }
 
    if(message.content === prefix + "staff"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("`STAFF` **:**")
        .setDescription("**Poisson rouge** - **Skywarz7** - **!LaPatateHD** - **LULU**")
        .setThumbnail(message.author.avatarURL)
        .addField("`La chaîne de mon créateur` **:**", "**CREEPER 320**")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === "tfq"){
        message.reply("regarde mon statue et tu serras :nerd:")
        console.log("Le bot dit tfq" )
    }
 
    if(message.content === prefix + "animation"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("Le pourcentage de la prochaine animation élémentia est à **1,5%**")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
});

client.on('message', async message => {
 
    if(message.content === prefix + "candidature"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#CC0000")
        .setTitle("Nous ne recherchons aucune personne **pour le moment**")
        .setTimestamp()
        message.channel.send(help_embed);
    }
 
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

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + '8ball'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Non :x:", "J'ai envie de dormir :zzz:", "Balec :face_palm:", "Peut être... :thinking:", "Absolument :interrobang:", "Tu as pas mieux", "Bien sûr :sunglasses:", "Aïe :fearful:", "MAIS OUI", "Sorry my chips :fries:", "OUI OUI OUI", "WTF", "Hum oui", "Ferme là avec ta question petite frite :fries:", "Je préfère regarder PatikuaFilms franchement", "Oui :fries: tu peux en être sûr"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("BLACK")
            .addField("Question:", question)
            .addField("Réponse:", rep[reptaille]);
        message.channel.send(embed)
    }
});

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + 'blague'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["1. Quelle mamie fait peur aux voleurs ? **Mamie Traillette**", "**Humour deux poules discutent** - Comment vas-tu ma cocotte? - Pas très bien. Je crois que je couve quelque chose ! ","Pourquoi il n'y a pas de ballon à question pour un champion ? Car Julien **Lepers**", "C'est un aveugle qui rentre dans un bar, et dans une table, et dans une chaise, et dans un mur, et... Bonne nuit",  "Tu connais la blague de la chaise? Elle est pliante", "C'est une femme qui prend sont bain, sont chien pète elle se noie pourquoi? Parce que sont chien c'est un **Pékinois**", "Quel super héros donne le plus vite l'heure ? Speed heure man ! *clap*", "Quel est le point commun entre un prêtre et un surdoué ?Ils ont tous les deux sauté une classe", "Tu connais schling-schling la girafe?  C'est une girafe qui passe trop près d un helico et schling-schling la girafe.", "-Comment appelle t'on les parents de l'homme invisible? - Les transparents", "Un chef de guerre dans un bar.-Nous sommes vaincus ! Le barmen: -Impossible, nous avons que 19 chaises.", "-Pourquoi Napoléon n' a jamais déménagé? -Parce qu'il avait un Bonaparte", "2 vaches discutent :- Ça te fait pas peur toi ces histoires de vache folle? Bah m'en fou j'suis un lapin", "Combien il faut de psy pour changer une ampoule ?Un seul mais il faut que l’ampoule veuille vraiment changer"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
     
        let embed = new Discord.RichEmbed()
            .setTitle("Une blague j'en ai une pour vous")
            .setColor("RANDOM")
            .addField("**Blague:**", rep[reptaille]);
        message.channel.send(embed)
    }
});

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + 'pf'){
        let rep = ["pile :right_facing_fist:", "face :raised_hand:"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
     
        let embed = new Discord.RichEmbed()
            .setTitle("**Pile ou Face**")
            .setColor("GREEN")
            .addField("Et c'est", rep[reptaille]);
        message.channel.send(embed)
    }
});

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + 'lancer'){
        let rep = [":one: 1", "two: 2", ":three: 3", ":four: 4", ":five: 5", ":six 6"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
     
        let embed = new Discord.RichEmbed()
            .setTitle("**Lancer de dé**")
            .setColor("GREEN")
            .addField("Et c'est le chiffre", rep[reptaille]);
        message.channel.send(embed)
    }
});

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + 'choix'){
        if (!args[0]) return message.channel.send("Veuillez **mentionner deux choses** :x:")
        let rep = ["Le choix numéro **2** :two", "Le choix numéro **1** :one:", "Le choix numéro **1** direct", "Bah le choix numéro **2** ultra logique", "Tu as pas mieux sérieux :expressionless:"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("RANDOM")
            .addField("Tes choix:", question)
            .addField("Choix de Michel:", rep[reptaille]);
        message.channel.send(embed)
    }
});

client.on('message',message => {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    
    if (args[0].toLocaleLowerCase() === prefix + 'bien'){
        if (!args[0]) return message.channel.send("Veuillez **poser une question** :x:")
        let rep = ["Génal", "Nul", "archie nul mec", "Aïe", "Mais mec c'est énorme", "Demande à CREEPER flemme de répondre", "OUI OUI OUI", "Non ne prend surtour pas ce truc", "Prend le direct", "WOAAAAAAAAW", "J'adore", "Pourquoi pas"];
        let reptaille = Math.floor((Math.random() * rep.length));
        let question = args.slice(0).join(" ");
 
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag)
            .setColor("PURPLE")
            .addField("Vous :", question)
            .addField("Michel_ :", rep[reptaille]);
        message.channel.send(embed)
    }
});
