const { readdirSync } = require("fs");

module.exports = (client) => {
  client.selectMenuhandler = async () => {
    const componentFolder = readdirSync("./src/handlers"); // replace "selectHandler" with your component file location
    for (const folder of componentFolder) {
      const componentFiles = readdirSync(`./src/handlers/${folder}`).filter( // replace "selectHandler" with your component file location
        (file) => file.endsWith(".js")
      );

      const { selectMenus } = client; // name of your collection on index.js file

      if (folder === "selectMenus") {
        for (const file of componentFiles) {
          const menu = require(`../../handlers/${folder}/${file}`); // replace "selectHandler" with your component file location

          selectMenus.set(menu.data.name, menu);
        }
      }
    }
  };
};
