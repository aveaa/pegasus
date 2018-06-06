const Discord = require("discord.js");
//Библеотека discord.js
const { inspect } = require("util");
//фор евал
const vm = require("vm");
const codeContext =  {};
vm.createContext(codeContext);
//Клиент бота
const client = new Discord.Client();
//префикс
const prefix = "pg.";
//массив ролей
const rule = {own: "421373056158662656", admin: "421244086557605888"};
//массив сосздателей
const creators = ['361951318929309707'];
//массив эмодзи
const emojis = {nya:'435849475865575424'}

client.on("ready", () => {
    //Отпраляет сообщение в логи что бот запущен (+ количество серверов).
    console.log(`Успешный старт. ${client.guilds.size} серверов`);
    //Ставит боту статус.
    client.user.setActivity(`pg.help for help`).catch(console.error);
    //Функция необходимая для запуска радуги.
});

client.on('message', async (message) => {
//При заданом сообщение выполняет действие.
    if (message.content.startsWith("бот пиши")) {
        //Отвечает за то чтобы бот начал писать в вызваном чате.
        message.channel.startTyping();
    }
    
//При заданом сообщение выполняет действие.
    if (message.content.startsWith("бот не пиши")) {
        //Отвечает за то чтобы бот перестал писать в вызваном чате.
        message.channel.stopTyping();
    }
    
    //При заданом сообщение и заданом пользователем выполняет действие.
    if (message.content.startsWith("x!restart") && message.author.id === "361951318929309707") {
        //Заканчивает процесс.
        process.exit();
    }
    
    //Отвечает за установку префикса в команды
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(['ping'].includes(command)) {
        message.reply("pong!")
        } else if(['h', 'help'].includes(command)) {
        const embed = new Discord.RichEmbed()
            .setTitle('Adminstration Commands.📑')
            .setColor("#42f4aa")
            .setDescription("**pg.say [Message]** `Bot will repeat what you command him to say.`\n**pg.embed **`embed Links and other stuff. ` *** pg.he for help ***\n**pg.rs [channel id] [message]** `Sends a message to the Specific Channel`\n**pg.us [user's id] [message] **`Sends a private message to a the Specific Discord user` \n**pg.warn [user] **`warns the Specific user for doing a offence.` \n**pg.kick [user] **`kick user` \n**pg.ban [user]** `Bans someone from the server`\n**pg.presence [type][status]** `changes the bot status`")
            .addField('Standard Commands.🎲', "**pg.oof **`Gets You o0fed and Killed !` \n**pg.afk [reason]** `helps you go into AFK mode and shows the reason why`.\n**pg.ping ** `pong check with Pegasus`\n**pg.ship** `shipping compatibility check`\n**pg.about **`shows information on the bot.`\n**pg.userinfo [user] **`shows a user information.    `\n**pg.serverinfo **`shows server information.`\n**pg.nya **`test the emoji team.`\n**pg.poll [Poll Message]** `create a embed poll`\n**pg.avatar [user] **`shows a user avatar.`")
        .setFooter(message.channel.guild.name)
        message.channel.send({embed});
            } else if(['si', 'serverinfo'].includes(command)) {
        if (message.channel.guild.large == true) {
            large = "yes"
        }
        if (message.channel.guild.large == false) {
            large = "no"
        }
        if (message.channel.guild.region == "russia") {
            message.channel.guild.region = "Россия"
        }
                let i = 0;
  message.guild.members.forEach(member => {
      if(!member.user.bot) i = i + 1;
  });
  let b = 0;
  message.guild.members.forEach(member => {
      if(member.user.bot) b = b + 1;
      });

                const embed = new Discord.RichEmbed()
                embed.setAuthor(message.author.tag, message.author.avatarURl)
                embed.setTitle('server info')
                embed.setColor("ff0000")
                embed.setThumbnail(message.channel.guild.iconURL)
                embed.addField('Server ID', message.channel.guild.id)
                embed.addField('Server Owner', message.channel.guild.owner)
                embed.addField('Server Owner ID', message.channel.guild.ownerID)
                embed.addField('Server Verification Lvl', message.channel.guild.verificationLevel)
                embed.addField('Users Count', message.channel.guild.memberCount)
                embed.addField('Roles Count', message.channel.guild.roles.size)
                embed.addField('Channels Count', message.channel.guild.channels.size)
                embed.addField('Server Name', message.channel.guild.name)
                embed.addField('Acronym name', message.channel.guild.nameAcronym, true)
                embed.addField('System channel', message.channel.guild.systemChannel !== null ? message.channel.guild.systemChannel : 'nothing.')
                embed.addField('System channel ID', message.channel.guild.systemChannelID !== null ? message.channel.guild.systemChannelID : 'nothing.', true)
                embed.addField('AFK channel', message.channel.guild.afkChannel !== null ? message.channel.guild.afkChannel : 'nothing.')
                embed.addField('>Religon<', message.channel.guild.region)
                embed.setFooter('ServerInfo')
                embed.setTimestamp(); message.react("✅");
            message.channel.send({embed});
    } else if (['ship'].includes(command)) {
        if(!args[0]) return message.channel.send("♥ **select users or user's.** `pg.ship <user> <user>`")

   var bondLevel = Math.floor(Math.random() * 102);
   let user1 = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
   let user2 = message.guild.member(message.guild.members.get(args[1]));
   let user3 = message.guild.member(message.guild.members.get(args[2]));

    if (bondLevel > 100 ) {
        var ship = 'ideal <3_<3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'cool <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'PERFECTION :smile:!'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Pretty Good! :smile:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Can Get Better! :smiley:'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'Can Get Better !:smiley:'
        var bondLevelResults = '♥♥♥♥♥♥♥🖤🖤🖤'
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'Just average :neutral_face:'
        var bondLevelResults = '♥♥♥♥♥♥🖤🖤🖤🖤'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = 'Passing average :neutral_face:'
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = 'Still Possible :neutral_face: '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Lower than average :frowning:'
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'Pretty Bad :frowning:'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Pretty Low :frowning:'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Cant Work it Out :frowning:'
        var bondLevelResults = `​♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Will Never Work out :frowning:'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    }


    if(!args[1]){
        var bondEmbed = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField(":heartpulse:** MATCHMAKING **:heartpulse:", `${message.author} ♥ ${args[0]}`)
        .addField("***BOND LEVEL***", `${bondLevel}%`)
        .addField("***Percentage...***", bondLevelResults)
        .addField("**Result?**", ship);


        return message.channel.send(bondEmbed)
    }

    if(!args[2]){
        var bondEmbed2 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField(":heartpulse:** MATCHMAKING **:heartpulse:", `${args[0]} ♥ ${args[1]}`)
        .addField("***BOND LEVEL***", `${bondLevel}%`)
        .addField("***Percentage...***", bondLevelResults)
        .addField("**Result?**", ship);


        return message.channel.send(bondEmbed2)
    }


    if(!args[3]) {

        var bondEmbed3 = new Discord.RichEmbed()

        .setColor("#f5a3fa")
        .addField(":heartpulse:** MATCHMAKING **:heartpulse:", `${args[0]} and ${args[1]} ♥ ${args[2]}`)
        .addField("***BOND LEVEL***", `${bondLevel}%`)
        .addField("***Percentage...***", bondLevelResults)
        .addField("**Result?**", ship);


        return message.channel.send(bondEmbed)
    }
}
    if(['userinfo', 'ui'].includes(command)) {
                message.delete().catch(O_o => {});
        let member = message.guild.members.get(message.author.id);

        let username = message.author.username
        let avatar = message.author.avatarURL
        let verified = "no"
        let userStatus = "offline"
        let userID = message.author.id

        if (message.author.verified == true) {
            verified = "yes"
        }
        if (message.author.status == "online") {
            userStatus = "online"
        }
        
        
        let joinedDate = member.joinedAt;
        let joinedMonth = joinedDate.getMonth() + 1;

        let createdDate = message.author.createdAt;
        let createdMonth = createdDate.getMonth() + 1;

        const embed = new Discord.RichEmbed()
            .setColor("ff0000")
            .setAuthor(message.author.tag, message.author.avatarURl)
            .addField("ID:", message.author.id, false)
            .addField("discriminator:", message.author.discriminator, false)
            .addField("full name:", message.author.tag, false)
            .addField("last message:", message.author.lastMessage, false)
            .addField("ID last message:", message.author.lastMessageID, false)
            .addField("created at:", (createdDate.getDate() < 10 ? '0' : '') + createdDate.getDate() + "." + (createdDate.getMonth() < 10 ? '0' : '') + createdMonth + "." + createdDate.getFullYear() + " " + (createdDate.getHours() < 10 ? '0' : '') + createdDate.getHours() + ":" + (createdDate.getMinutes() < 10 ? '0' : '') + createdDate.getMinutes() + ":" + (createdDate.getSeconds() < 10 ? '0' : '') + createdDate.getSeconds(), false)
            .addField("verify?", verified, false)
            .addField("join to server at:", (joinedDate.getDate() < 10 ? '0' : '') + joinedDate.getDate() + "." + (joinedDate.getMonth() < 10 ? '0' : '') + joinedMonth + "." + joinedDate.getFullYear() + " " + (joinedDate.getHours() < 10 ? '0' : '') + joinedDate.getHours() + ":" + (joinedDate.getMinutes() < 10 ? '0' : '') + joinedDate.getMinutes() + ":" + (joinedDate.getSeconds() < 10 ? '0' : '') + joinedDate.getSeconds(), false)
            .setThumbnail(avatar)
            .setFooter("Userinfo")
            .setTimestamp(); message.react("✅");
        message.channel.send({
            embed
        });
    } else if (['embed', 'embedsay', 'e'].includes(command)) {
        try {
            let text = args.join(" ").replace(/\n/g, "\\n");
            let embed = new Discord.RichEmbed();
            let footer = text.match(/{footer:(.*?)( \| icon: ?(.*?))?}/i);
            if (footer !== null) {
                embed.setFooter(footer[1], footer[3])
            }
            let image = text.match(/{image: ?(.*?)}/i);
            if (image !== null) {
                embed.attachFile({
                    attachment: image[1],
                    file: image[1].substring(image[1].lastIndexOf('/') + 1)
                }).setImage('attachment://'+image[1].substring(image[1].lastIndexOf('/') + 1));
            }
            let thumb = text.match(/{thumbnail: ?(.*?)}/i);
            if (thumb !== null) {
                embed.attachFile({
                    attachment: thumb[1],
                    file: thumb[1].substring(thumb[1].lastIndexOf('/') + 1)
                }).setThumbnail('attachment://'+thumb[1].substring(thumb[1].lastIndexOf('/') + 1));
            }
            let author = text.match(/{author:(.*?)( \| icon: ?(.*?))?( \| url: ?(.*?))?}/i);
            if (author !== null) {
                embed.setAuthor(author[1], author[3], author[5])
            }
            let title = text.match(/{title:(.*?)}/i);
            if (title !== null) {
                embed.setTitle(title[1])
            }
            let url = text.match(/{url: ?(.*?)}/i);
            if (url !== null) {
                embed.setURL(url[1])
            }
            let description = text.match(/{description:(.*?)}/i);
            if (description !== null) {
                embed.setDescription(description[1].replace(/\\n/g, '\n'))
            }
            let color = text.match(/{colou?r: ?(.*?)}/i);
            if (color !== null) {
                embed.setColor(color[1])
            }
            let timestamp = text.match(/{timestamp(: ?(.*?))?}/i);
            if (timestamp !== null) {
                if (timestamp[2] === undefined || timestamp[2] === null)
                embed.setTimestamp(new Date());
                else
                embed.setTimestamp(new Date(timestamp[2]));
            }
            let fields = text.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/gi)
            if (fields !== null) {
                fields.forEach((item) => {
                if (item[1] == null || item[2] == null || typeof item[1] === "undefined" || typeof item[2] === "undefined") return;
                let matches = item.match(/{field: ?(.*?) \| value: ?(.*?)( \| inline)?}/i);
                embed.addField(matches[1], matches[2], (matches[3] != null));
            });}
            message.channel.send({embed});
            message.delete();
        } catch(e) {
            message.channel.send({embed: (new Discord.RichEmbed).setTitle('Error').setDescription('Sending embed Error').setColor('#C34E4E')}).then(msg => msg.delete(3000));
            console.error(e);
        }
    } else if(['helpembed', 'he'].includes(command)) {
        const embed = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setDescription("__**Embed Text Commands**__ :link: \n\n**{description: description text}** `text bellow entered bellow the title ` \n**{title: header text}**  `header title that can be seen at the top of the embed` \n**{field: name | value: text}**  `Makes a second row column title with description` \n**{timestamp}** ` To show the time it was embed.` \n**{footer: bottom text}**  `shows who wrote the message at the bottom` \n**{color: # color}**  `Colour of the embed box at the left side.` \n**{image: url}**  `If there is a Image from a external URL Link you want to embed` \n**{thumbnail url}**  `If there is a Thumbnail from a external URL Link you want to embed` \n\n**Example:** \n`pg.embed {thumbnail: https://cdn.discordapp.com/attachments/443354515937427480/444145870745763851/info-1459077_960_720.png}{title: Embed Example}{description: Good Day Mate}{field: How to use embed? | value: This is how you use.}{timestamp}{footer: pg.he for help}{color: 4e5d94}`")
        .setFooter("embed")
        .setTimestamp();
        message.channel.send({embed});
    } else if(['presence'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "242091351951409152")) {
        let new_args = args;
        if (new_args[0].toLowerCase() === 'играет' && new_args[1].toLowerCase() === 'в') {
            new_args[0] = 'играет в';
            new_args.splice(1, 1);
        }
        let type = new_args.shift();
        let real_type;
        if (['play', 'playing', '0'].includes(type.toLowerCase()))
            real_type = 0;
        else if (['listen', 'listening', '2'].includes(type.toLowerCase()))
            real_type = 2;
        else if (['watch', 'watching', '3'].includes(type.toLowerCase()))
            real_type = 3;
        else return message.channel.send(`Error. Type \`${type.replace(/` /g, "\'")}\` is wrong`);
        const status = new_args.join(" ");
        client.user.setPresence({ game: { name: status, type: real_type } }).catch();
        let status_word;
        if (real_type === 0)
            status_word = 'playing';
        else if (real_type === 2)
            status_word = 'Listening';
        else if (real_type === 3)
            status_word = 'watching';

        const embed = new Discord.RichEmbed()
            .setTitle('status changed to:')
            .setDescription(`${status_word} **${status.replace(/` /g, "\\\'")}**`)
            .setFooter('Presence');
        message.channel.send({embed});
        message.delete();
            } else if (['eval', 'эмулировать'].includes(command) && (message.author.id === "361951318929309707" || message.author.id === "421030089732653057" || message.author.id === "242091351951409152")) {
        //Захват кода.
        const code = args.join(" ");
        const token = client.token.split("").join("[^]{0,2}");
        const rev = client.token.split("").reverse().join("[^]{0,2}");
        const filter = new RegExp(`${token}|${rev}`, "g");
        try {
            let output = eval(code);
            if (output instanceof Promise || (Boolean(output) && typeof output.then === "function" && typeof output.catch === "function")) output = await output;
            output = inspect(output, { depth: 0, maxArrayLength: null });
            output = output.replace(filter, "[TOKEN]");
            output = clean(output);
            if (output.length < 1950) {
                //Отправляет пользователю данные эмуляции.
                message.author.send(`\`\`\`js\n${output}\n\`\`\``);
                //Ставит реакцию (выполнено).
                message.react("✅")
            } else {
                message.author.send(`${output}`, {split:"\n", code:"js"});
            }
        } catch (error) {
            //Захватывает ошибку и говорит об этом.
            message.channel.send(`Произошла ошибка \`\`\`js\n${error}\`\`\``);
            //Ставит реакцию (Ошибка).
            message.react("❎")
        }

        function clean(text)  {
            return text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203));
        } 
    } else if (['poll'].includes(command)) {
        //Удаляет сообщение.
                message.delete().catch(O_o => {});
        //Захватывает сообщение.
        const say_poll_embed = args.join(" ");
        // Создает рич ембед.
        const embed = new Discord.RichEmbed()
        //Устанавливает цвет ("#color") для хеш или же (color).
            .setColor(16766720)
        //Устанавливает текст после чего вызывает захватаное сообщение и вставляет его.
            .setDescription(say_poll_embed)
        //Создает нижний текст.
            .setFooter("Please Vote Bellow.")
        //Ставит временую метку.
            .setTimestamp();
        //Отправляет ембед
        message.channel.send({
            embed
        }).then(function(message) {
            //Функция переходит на сообщение бота.
            message.react("✅")
            //Ставит реакцию (Согласен).
            message.react("❎")
            //Ставит реакцию (Несогласен).
        }).catch(function() {});
    } else if (['oof','of'].includes(command)) {
        let member = message.mentions.members.first();
        if (member.user.id === message.author.id) return message.reply("*** you o0fed yourself.***")
        message.reply(`***o0fed the*** ${member}`)
    } else if (['avatar', 'av'].includes(command)) {
        //задает 1 слово как пользователя
        let member = message.mentions.members.first();
        //если пользователь не найден или вписано не правильно выдает ошибку
        let embederr = (`${message.author}, cant find that user.`);
        //если пользователя нет выполняет действие
        if (!member)
            //вызывает текст ошибки
            return message.channel.send({embederr});
        //новый рич ембед
            const embed = new Discord.RichEmbed()
            //создает заголовок
                .setTitle(`${member.user.tag} avatar`)
            //создает изображение
                .setImage(member.user.avatarURL)
            //нижний текст
                .setFooter("Avatar")
            //задает цвет
                .setColor("#0000ff")
            //отправляет
            message.channel.send({embed});
    } else if (['afk'].includes(command)) {
        message.delete();
        const afkMessage = args.join(" ");
        const embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username}, briefly walked away`)
        .setDescription(afkMessage.replace(/`/g, "\\`"))
        .setThumbnail('https://images-ext-1.discordapp.net/external/zOQcnhsC7Ud8tPF-pJQpt51YyrvvP-xwH5c9v02p4Ys/https/thumbs.gfycat.com/SinfulCompetentBeaver-max-1mb.gif?width=80&height=80')
        .setColor('0000ff')
        message.channel.send({embed}).then(function(message) {
            //Функция переходит на сообщение бота.
            message.react('💤')
        }).catch(function() {});
    } else if (['warn'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
        let member = message.mentions.members.first();
    args.shift();
    const WarnMessage = args.join(" ");
        if (member.user.id === undefined) return message.channel.send("please select target")
        if (member.user.id === message.author.id) return message.channel.send("cant warn yourself.")
        if (member.user.id === message.author.bot.id) return message.reply('its a bot ._..');
    if (member.user.id === message.channel.guild.ownerID) return message.channel.send("cant warn owner.")
        if (!message.member.hasPermission('MANAGE_MESSAGES', false, true, true))
                return message.channel.send("you dont have **MANAGE_MESSAGES** for using that.")
    message.channel.send(`🔨 ${member.user} has warned: **` + WarnMessage + "**");
    } else if (['about'].includes(command)) {
        const embed = new Discord.RichEmbed()
            .setColor("#00ff00")
            .setTitle('stats')
            .setThumbnail(client.user.avatarURL);
        embed.addField('ping', client.ping, true);
        embed.addField('server', process.env.DYNO, true);
        embed.addField('port', process.env.PORT, true);
        embed.addField('servers count', `${client.guilds.size}`)
        embed.addField('users count', `${client.users.size}`)
        embed.addField('channels count', `${client.channels.size}`)
        message.channel.send(embed);
        message.delete();
    } else if (['servers'].includes(command)) {
        let guilds = [];
        client.guilds.forEach(function (guild) {guilds.push(guild.name.replace(/`/g, "`" + String.fromCharCode(8203)) + ' OWNER: ' + guild.owner.user.tag.replace(/`/g, "`" + String.fromCharCode(8203)) + ' ID: ' + guild.id)});
        message.channel.send('\`\`\`'+guilds.join('\n')+'\`\`\`');
    } else if (['kick'].includes(command) && message.member.hasPermission('KICK_MEMBERS')) {
            const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('kicked').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick the member');
          console.error(err);
        });
      } else {
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
  } else if (['ban'].includes(command) && message.member.hasPermission('BAN_MEMBERS')) {
        
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**missing permissions.**");

    let member = message.mentions.members.first();

    if(!member)
    return message.channel.send("**select target.** `pg.ban [user]`");

    if(!member.bannable)
    return message.channel.send("** i cant ban him. ** he have more permissions? i dont have `BAN_MEMBERS`?.");

    let reason = args.slice(1).join(' ');
    if(!reason)
    return message.channel.send("**where is reason.**");

    await member.ban(reason)
      .catch(error => message.channel.send(`you cant use that. **${error}**`));

    if(!reason){
        const channel = member.guild.channels.find('name', "logs");
        message.channel.send(`${member.user.username} banned. \nModerator ${message.author.username}`);
        let Banembed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#ff0000")
        .setTimestamp()
        .addField('member', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
        .addField('moderator', `${message.author.username}#${message.author.discriminator}`)
        .addField('Reason', "dont have reason");
        message.channel.send(Banembed);
    }

    message.channel.send(`${member.user.username} banned. \nModerator ${message.author.username} \nreason: **${reason}**`);
    const channel = member.guild.channels.find('name', "logs");
    let Banembed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#ff0000")
    .setTimestamp()
    .addField('member', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    .addField('moderator', `${message.author.username}#${message.author.discriminator}`)
    .addField('Reason', reason);
    message.channel.send(Banembed);
}
    if(['say'].includes(command)) {
        const sayMessage = args.join(" ");
        message.delete().catch(O_o => {});
        message.channel.send(sayMessage);
    } else if (['usend', 'us'].includes(command) && message.author.id === "361951318929309707" || message.author.id === "242091351951409152") {
                if (message.guild.members.get === undefined) {
            return message.channel.send('send error');
        }
        let new_args = args;
        const userse = new_args.shift();
        const UsersayMessage = new_args.join(" ");
        console.log(userse);
               message.guild.members.get(userse).send(UsersayMessage);message.delete();
    } else if (['rsend', 'rs'].includes(command) && message.member.hasPermission('MANAGE_MESSAGES')) {
        if (message.channel.id === undefined) {
            return message.channel.send('send error');
        }
        let new_args = args;
        const chat = new_args.shift();
        const sayMessage = new_args.join(" ");
        console.log(chat);
        message.guild.channels.get(chat).send(sayMessage).catch(()=>{message.reply('error');});
        message.delete().catch(O_o=>{});
});

client.login(process.env.BOT_TOKEN).catch(console.error);
process.env.BOT_TOKEN = 'her_tebe';
