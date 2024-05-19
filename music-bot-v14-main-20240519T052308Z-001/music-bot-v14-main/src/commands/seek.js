
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("seek")
    .setDescription("🎵 | Müzik Arayın!")
    .addStringOption(option => option.setName("number").setDescription("How far do you want to go?").setRequired(true)),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`Listede henüz şarkı yok.`)
         const number = interaction.options.getString("Sayı")
         if(isNaN(number)) return interaction.followUp("Bana sayı ver!")
         const type = parseInt(number)
         queue.seek((queue.currentTime + type))
         return interaction.followUp("Başarılı bir şekilde hızlı iletildi.")


try {
 } catch (e) {
   return;
 }
 }
}
