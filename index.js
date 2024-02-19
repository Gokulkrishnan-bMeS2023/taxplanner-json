const jsonServer = require("json-server"); //importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleweres=jsonServer.defaults();
const port = process.env.PORT || 8080; //chose port from like 8080 , 3001

server.use(middleweres);
server.use(router);

server.listen(port);