
var http = require("http");

var PORT = 7000;
var PORT2 = 7500;
var badThing = ["bad 1", "bad 2", "bad 3", "bad 4"];
var goodThing = ["good 1", "good 2", "good 3", "good 4"];


function handleRequestOne(request, response) {
    var goodRand = goodThing[Math.floor(Math.random() * goodThing.length)];
    response.end(goodRand);
}
function handleRequestTwo(request, response) {
    var badRand = badThing[Math.floor(Math.random() * badThing.length)];
    response.end(badRand);
}

var server1 = http.createServer(handleRequestOne);
var server2 = http.createServer(handleRequestTwo);


server1.listen(PORT, function () {
    console.log("Server1 listening on: http://localhost:" + PORT);
});
server2.listen(PORT2, function () {
    console.log("Server2 listening on: http://localhost:" + PORT2);
});
