  const handlerFolders = fs.readdirSync("./src/funcs"); // location of your selectmenuHandler.js
  for (const folder of handlerFolders) {
    const handlerFiles = fs
      .readdirSync(`./src/funcs/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of handlerFiles) {
      require(`./funcs/${folder}/${file}`)(client);
    }
  }
