
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("back")
    .setDescription("🎵 | Dur")
    .addStringOption(option => option.setName("number").setDescription("How far back do you want to go?").setRequired(true)),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`Listede henüz şarkı yok.`)
         const number = interaction.options.getString("sayı")
         if(isNaN(number)) return interaction.followUp("Bana sayı ver!")
         const type = parseInt(number)
         queue.seek((queue.currentTime - type))
         return interaction.followUp("Successfully reclaimed the song.")


try {
 } catch (e) {
   return;
 }
 }
}
