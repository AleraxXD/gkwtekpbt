const Command = require("../../base/Command.js");
const data = require("../../models/cezalar.js")
const ms = require("ms")
const mutes = require("../../models/chatmute.js")
const vmutes = require("../../models/voicemute.js")
const cezalar = require("../../models/cezalı.js")
let serverSettings = require("../../models/serverSettings");
const moment = require("moment")
require("moment-duration-format")
moment.locale("tr")
const Discord = require("discord.js")
class İnfo extends Command {
    constructor(client) {
        super(client, {
            name: "info",
            usage: ".info [@user]",
            category: "Authorized",
            description: "Belirttiğiniz kişinin aktif cezalarını görürsünüz.",
            aliases: ["cezainfo", "ceza-bilgi", "ceza-info", "bilgi-ceza"]
        });
    }
    async run(message, args, perm) {
        let server = await serverSettings.findOne({
            guildID: message.guild.id
        });
		if (!message.member.roles.cache.some(r => server.JailAuth.includes(r.id)) && !message.member.permissions.has("VIEW_AUDIT_LOG")) return;
        let user = message.mentions.members.first() || await this.client.üye(args.join(" "), message.guild) || await this.client.client_üye(args.join(" "))
        if (!user) return this.client.yolla("Ceza bilgisine bakmak istediğin kullanıcıyı bulamadım.", message.author, message.channel)
        if(!message.guild.members.cache.has(user.id)) return this.client.yolla("Ceza bilgisine bakmak istediğin kullanıcı sunucuda bulunmuyor.", message.author, message.channel)
        let mute = ""
        let vmute = ""
        let cezalı = ""
        await cezalar.findOne({ user: user.id }, async (err, doc) => {
            if (!doc) {
                cezalı = "```"+"Veritabanında aktif cezalı bilgisi bulunmamakta."+"```"
            } else {
                if (doc.ceza == false) {
                    cezalı = "```"+"Veritabanında aktif chat mute bilgisi bulunmamakta."+"```"
                } else if (doc.ceza == true) {
                    cezalı = "```"+"Cezalı Atan Yetkili: "+ this.client.users.cache.get(doc.yetkili).tag +"\nCeza Sebebi: " + doc.sebep + "\nCeza Tarihi: " + doc.tarih + "\nCeza Bitiş: Bilinmiyor."+"```"
                }
            }
        })
        await mutes.findOne({ user: user.id }, async (err, doc) => {
            if (!doc) {
                mute = "```"+"Veritabanında aktif chat mute bilgisi bulunmamakta."+"```"
            } else {
                if (doc.muted == false) {
                    mute = "```"+"Veritabanında aktif chat mute bilgisi bulunmamakta."+"```"
                } else if (doc.muted == true) {
                    mute = "```"+"Mute Atan Yetkili: "+ this.client.users.cache.get(doc.yetkili).tag +"\nMute Sebebi: " + doc.sebep + "\nMute Başlangıç: " + moment(doc.start).format("LLL") + "\nMute Bitiş: " + moment(doc.endDate).format("LLL") +"```"
                }
            }
        })
        await vmutes.findOne({ user: user.id }, async (err, doc) => {
            if (!doc) {
                vmute = "```"+"Veritabanında aktif ses mute bilgisi bulunmamakta."+"```"
            } else {
                if (doc.muted == false) {
                    vmute = "```"+"Veritabanında aktif voice mute bilgisi bulunmamakta."+"```"
                } else if (doc.muted == true) {
                    vmute = "```"+"Mute Atan Yetkili: "+ this.client.users.cache.get(doc.yetkili).tag +" \nMute Sebebi: " + doc.sebep + "\nMute Başlangıç: " + moment(doc.start).format("LLL") + "\nMute Bitiş: " + moment(doc.endDate).format("LLL") +"```"
                }
            }
        })
        let uu = this.client.users.cache.get(user.id)
        const embed = new Discord.MessageEmbed()
        .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setColor("RANDOM")
            .setDescription("<@" + user.id + "> kişisinin ceza bilgileri aşağıda belirtilmiştir.")
            .setThumbnail(uu.displayAvatarURL({ dynamic: true }))
            .addFields(
                { name: '❯ Cezalı Bilgisi', value: cezalı || "```"+"Veritabanında aktif cezalı bilgisi bulunmamakta."+"```"},
                { name: '❯ Chat Mute Bilgisi:', value: mute || "```"+"Veritabanında aktif chat mute bilgisi bulunmamakta."+"```" },
                { name: '❯ Ses Mute Bilgisi:', value: vmute || "```"+"Veritabanında aktif voice mute bilgisi bulunmamakta."+"```" },
            ).setFooter({ text: "Üyenin devam etmekde olan aktif bir cezası yok ise önceden almış olduğu tüm cezalara bakmak için !ceza @Gökw/ID komutunuz kullanın"})
                await message.channel.send({ embeds: [embed] })
    }
}
module.exports = İnfo;