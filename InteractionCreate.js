if (interaction.isSelectMenu()) {
      const { selectMenus } = client;
      const { customId } = interaction;

      const menu = selectMenus.get(customId);
      if (!menu) return new Error("No code found for this select selectMenu!");

      try {
        await menu.execute(interaction, client);
      } catch (err) {
        console.log(err);
      }
    }
