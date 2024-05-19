
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const { SlashCommandBuilder } = require("@discordjs/builders");
const Discord = require("discord.js")
const db = require("croxydb")
const languagefile = require("../language.json")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("nowplaying")
    .setDescription("🎵 | Çalan şarkı hakkında bilgi alırsınız."),
    run: async (client, interaction) => {
      await interaction.deferReply().catch(err => {})
        const queue = client.distube.getQueue(interaction);
        if (!queue) return interaction.followUp(`Listede henüz şarkı yok.`).catch(err => {})
          const part = Math.floor((queue.currentTime / queue.songs[0].duration) * 20);
          const embed = new EmbedBuilder()
              .setColor('Purple')
              .setDescription(`**[${queue.songs[0].name}](${queue.songs[0].url})**`)
              .addFields({ name: 'Müzik Yazarı:', value: `[${queue.songs[0].uploader.name}](${queue.songs[0].uploader.url})`, inline: true })
              .addFields({ name: 'Üye:', value: `${queue.songs[0].user}`, inline: true })
              .addFields({ name: 'Ses:', value: `${queue.volume}%`, inline: true })
              .addFields({ name: 'Görüntüleme:', value: `${queue.songs[0].views}`, inline: true })
              .addFields({ name: 'Beğeni:', value: `${queue.songs[0].likes}`, inline: true })
              .addFields({ name: 'Filtre:', value: `${queue.filters.names.join(', ') || "Normal"}`, inline: true })
              .addFields({ name: `Video süresi: **[${queue.formattedCurrentTime} / ${queue.songs[0].formattedDuration}]**`, value: ` ${'<:circle:1033057941647016056>'.repeat(part) + '🎵' + '<:asd:1033046466438107158>'.repeat(20 - part)}`, inline: false })
return interaction.followUp({embeds: [embed]}).catch(err => {})
try {
 } catch (e) {
   return;
 }
 }
}
