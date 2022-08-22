                    ///////// NOTE /////////
// Place this files at the place you selected in selectMenuHandler.js //
                  ///////// NOTE END /////////

module.exports = {
  data: {
    name: "colors-menu",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `You selected: ${interaction.values[0]}! GRAPE!!!!!!!!!`,
    });
  },
};
