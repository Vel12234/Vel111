
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("pause")
    .setDescription("🎵 | Müziği Durdur!"),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
      const language = db.fetch(`language_${interaction.user.id}`)
if (!language) {
      const queue = client.distube.getQueue(interaction);
         if (!queue) return interaction.followUp(`Listede henüz şarkı yok.`)
         if (queue.paused === true) return interaction.followUp("Müzik zaten durduruldu.")

interaction.followUp({content: "Şarkınız başarıyla duraklatıldı."})
client.distube.pause(interaction);
}

 }
}
