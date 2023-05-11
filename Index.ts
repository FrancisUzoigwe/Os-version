import http, { ServerResponse } from "http"

const server = http.createServer((
    req: http.IncomingMessage, res: ServerResponse<http.IncomingMessage> 
) => {

    res.writeHead(200, {"content-type": "text/html"});
   const mainData = req.rawHeaders[15].slice(12,42);
   console.log(`${mainData}`);
   res.write(`You're accessing from ${mainData}`);
   res.end()
})

server.on("connection", () => {
    console.log("connection established");
});

server.listen(2004, () => {
    console.log("")
    console.log("Server is listening on port")
});