var http = require("http");
var fs = require("fs");
var ports = [10000, 10001, 10002];
const { listenerCount } = require("process");
fs.readFile("practical10.html", function (err, html) {
if (err) {
console.log(err);
}
ports.forEach(function (port) {
http
.createServer(function (request, response) {
response.writeHeader(200, { contentType: "text/html" });
response.write(html);
response.end();
})
.listen(port);
});
});
