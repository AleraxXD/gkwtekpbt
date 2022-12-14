const Command = require("../../base/Command.js");
const data = require("../../models/cezalar.js")
const ms = require("ms")
const moment = require("moment")
let serverSettings = require("../../models/serverSettings");
require("moment-duration-format")
moment.locale("tr")
const { table } = require('table');
class CezaPuan extends Command {
    constructor(client) {
        super(client, {
            name: "cezapuan",
            usage: ".cezapuan [@user]",
            category: "Authorized",
            description: "Belirttiğiniz kişinin ceza puanını görürsünüz.",
            aliases: ["cp"]
        });
    }

    async run(message, args, perm) {
        let server = await serverSettings.findOne({
            guildID: message.guild.id
        });
		if (!message.member.roles.cache.some(r => server.JailAuth.includes(r.id)) && !message.member.permissions.has("VIEW_AUDIT_LOG")) return;
        let user = message.mentions.members.first() || await this.client.üye(args[0], message.guild)
        if (!user) return this.client.yolla("Bir üye etiketle ve tekrardan dene!", message.author, message.channel)
    
        let puan = await this.client.punishPoint(user.id)
        message.channel.send(`${user} üyesi: `+puan+` ceza puanı`) 
    
    }
}

module.exports = CezaPuan;
