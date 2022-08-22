const { readdirSync } = require("fs");

module.exports = (client) => {
  client.componentHandler = async () => {
    const componentFolder = readdirSync("./src/selectHandler"); // replace "selectHandler" with your handler location
    for (const folder of componentFolder) {
      const componentFiles = readdirSync(`./src/selectHandler/${folder}`).filter( // replace "selectHandler" with your handler location
        (file) => file.endsWith(".js")
      );

      const { selectMenus } = client; // name of your collection on index.js file

      if (folder === "selectMenus") {
        for (const file of componentFiles) {
          const menu = require(`../../selectHandler/${folder}/${file}`); // replace "selectHandler" with your handler location

          selectMenus.set(menu.data.name, menu);
        }
      }
    }
  };
};
