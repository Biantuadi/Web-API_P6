// importation des modules
const app = require("./app");
app.set("port", process.env.PORT || 3000);

// creation du serveur
const http = require('http');
const server = http.createServer(app);
server.listen(process.env.PORT || 3000);