// A Basic Node Server

const http = require("http");

const server = http.createServer(function (req, res) {
  res.setHeader("Content-type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.writeHead(200);

  let dataObj = { id: 1124490, name: "Deependra", email: "deepen@gmail.com" };
  let data = JSON.stringify(dataObj);

  res.end(data);
});

server.listen(2000, function () {
  console.log("Listening on port 1234");
});
