
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("static")
    .setDescription("🤖 | Botunuzun istatistikliğini görün!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
const embed = new Discord.EmbedBuilder()
.setAuthor({name: "𝐁𝐎𝐑𝐔𝐒𝐀𝐍 - Bot Static!", iconURL: client.user.avatarURL()})
.addFields({name: "Toplam Üye:", value: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, inline: true})
.addFields({name: "Toplam sunucu", value: `${client.guilds.cache.size.toLocaleString()}`, inline: true})
.addFields({name: "Toplam Kanallar", value: `${client.channels.cache.size.toLocaleString()}`, inline: true})
.addFields({name: "Toplam Ram", value: (process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB", inline: true})
.addFields({name: "Müzik Guilds:", value: `${client?.voice?.adapters?.size || 0}`, inline: true})
.addFields({name: "Ping", value: `${client.ws.ping}`, inline: true})
.setColor("Orange")
 return interaction.followUp({embeds: [embed]})


 }
}
