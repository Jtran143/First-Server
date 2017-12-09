var http = require("http");

var PORT1 = 7000;

function handleRequest(req, resp) {
    console.log("YOU ARE AMAZING");
    resp.end("WOO WE MADE A SERVER BABY: " + req.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT1, function() {
    console.log("listening on: http://localhost:" + PORT1);
});

var PORT2 = 7500;

function handleRequest2(req, resp) {
    console.log("YOU ARE TERRIBLE");
    resp.end("YOU ARE VERY TERRIBLE");
}

var server = http.createServer(handleRequest2);

server.listen(PORT2, function() {
    console.log("listening on: http://localhost:" + PORT2)
});
