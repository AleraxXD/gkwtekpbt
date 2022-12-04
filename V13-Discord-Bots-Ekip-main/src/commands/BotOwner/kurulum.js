const Command = require("../../base/Command.js");
const Discord = require("discord.js")
let serverSettings = require("../../models/serverSettings");

class BotKurulum extends Command {
  constructor (client) {
    super(client, {
      name: "botkurulum",
      usage: ".botkurulum",
      category: "BotOwner",
      description: "Bot için gerekli emoji ve log kanallarının kurulumunu sağlar.",
      aliases: ["botkurulum","logkur","log-kur", "logkurulum","emojikur","emojikurulum", "emoji-kur","kurulum","gökwkurulum"]
    });
  }

  async run (message, args, perm) { 
    let server = await serverSettings.findOne({
      guildID: message.guild.id
  });
    if(!server.BotOwner.includes(message.author.id)) return
    
    "Gökw Emoji Log kurma paneli; alttaki butonlar sizi yönlendirecektir iyi kurumlar ... gökw muah"
        var currentPage = 1
        const row = new Discord.MessageActionRow()
        .addComponents(
        new Discord.MessageButton()
        .setCustomId('EmojiKur')
        .setLabel("Emojileri Kur!")
        .setEmoji("📁")
        .setStyle('SECONDARY'),
        new Discord.MessageButton()
        .setCustomId('LogKur')
        .setLabel("Logları Kur!")
        .setEmoji("📁")
        .setStyle('SECONDARY'),
        new Discord.MessageButton()
        .setCustomId('merişema')
        .setLabel("Setup Şema Kur!")
        .setEmoji("📁")
        .setStyle('PRIMARY'),
        );
    
    let msg = await message.channel.send({ components: [row], content: "Gökw Emoji Log kurma paneli; alttaki butonlar sizi yönlendirecektir iyi kurumlar ... Gökw muah" })

    var filter = (button) => button.user.id === message.author.id;
    const collector = msg.createMessageComponentCollector({ filter, time: 30000 })

    collector.on('collect', async (button) => {
      if (button.customId === "EmojiKur") {
        row.components[0].setDisabled(true) 
        msg.edit({ components: [row] }); 

        let gokw_vunmute = "https://cdn.discordapp.com/emojis/933325556722847786.webp?size=96&quality=lossless";
        let gokw_slotgif = "https://cdn.discordapp.com/emojis/926963384556093520.gif?size=96&quality=lossless";
        let gokw_patlican = "https://cdn.discordapp.com/emojis/926963384623181874.webp?size=96&quality=lossless";
        let gokw_unmute = "https://cdn.discordapp.com/emojis/933325273632489512.webp?size=96&quality=lossless";
        let coin = "https://cdn.discordapp.com/emojis/926963384623173633.webp?size=96&quality=lossless";
        let coinflip = "https://cdn.discordapp.com/emojis/926963384786763796.gif?size=96&quality=lossless";
        let no_gokw = "https://cdn.discordapp.com/emojis/929716459461042248.webp?size=96&quality=lossless";
        let yes_gokw = "https://cdn.discordapp.com/emojis/929716459809177651.webp?size=96&quality=lossless";
        let gokw_kalp = "https://cdn.discordapp.com/emojis/926963384774197298.webp?size=96&quality=lossless";
        let gokw_kiraz = "https://cdn.discordapp.com/emojis/926963384350539797.webp?size=96&quality=lossless";
        let gokq_mute = "https://cdn.discordapp.com/emojis/929716460010500106.webp?size=96&quality=lossless";
        let gokw_para = "https://cdn.discordapp.com/emojis/926963384937762916.gif?size=96&quality=lossless";
        let gokw_star = "https://cdn.discordapp.com/attachments/827439712834158622/827439871505072178/star.gif";
        let gokw_erkek = "https://cdn.discordapp.com/emojis/981204949599936552.gif?size=96&quality=lossless";
        let gokw_kadin = "https://cdn.discordapp.com/emojis/981204937994293328.gif?size=96&quality=lossless";
    
        button.reply("Emoji kurulumu başlatılıyor.")
        message.guild.emojis.create(gokw_vunmute, "gokw_vunmute").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_slotgif, "gokw_slotgif").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_patlican, "gokw_patlican").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_unmute, "gokw_unmute").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(coin, "coin").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(coinflip, "coinflip").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(no_gokw, "no_gokw").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(yes_gokw, "yes_gokw").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_kalp, "gokw_kalp").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_kiraz, "gokw_kiraz").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_mute, "gokw_mute").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_para, "gokw_para").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_star, "gokw_star").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_erkek, "gokw_erkek").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
        message.guild.emojis.create(gokw_kadin, "gokw_kadin").then(emoji => message.channel.send(`Başarıyla ${emoji.name} adında emoji oluşturuldu. (${emoji})`)).catch(console.error);
     
        return;

      } else if (button.customId === "LogKur") {
        row.components[1].setDisabled(true) 
        msg.edit({ components: [row] }); 
     
        button.reply(`Bot loglarının kurulumuna başlanıyor.`)
        const parent = await message.guild.channels.create('Gökw Logs', { type: 'GUILD_CATEGORY' });
     await message.guild.channels.create('join-family', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('leave-family', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('yetkili-tag-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('yasaklı-tag', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('booster-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('command-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('command-block', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('moderation-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('rol-yönet-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('register-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('cezai-işlem-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('yasak-kaldırma-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('stream-denetleme-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('stream-cezalı-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('basit-nickname', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('voice-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('nickname-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('message-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('discord-user-log', { type: 'GUILD_TEXT', parent: parent.id });
    await message.guild.channels.create('invite-tracker', { type: 'GUILD_TEXT', parent: parent.id });
    message.channel.send(`Bot loglarının kurulumu başarıyla tamamlanmıştır.`)
  
  } else if (button.customId === "CANCEL") {
        row.components[0].setDisabled(true) 
        row.components[1].setDisabled(true) 
        row.components[2].setDisabled(true) 
        msg.edit({ components: [row] }); 

        button.reply("İşlem iptal edildi")
      }
    })
    collector.on("end", async(button) => {
      row.components[0].setDisabled(true) 
    row.components[1].setDisabled(true) 
    row.components[2].setDisabled(true) 
    msg.edit({ components: [row] }); 
    })
  }
}
module.exports = BotKurulum;