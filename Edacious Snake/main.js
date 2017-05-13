const http = require("http");
const fs = require("fs");
const mime = require("./js/mime").mime;
const path = require("path");
const url = require("url");

http.createServer((req, res) => {
	 var pathname = url.parse(req.url).pathname,
	 	 realPath = (pathname === "/")? "./example.html" : ("."+pathname),
         type = path.extname(pathname).slice(1);
	
	console.log(realPath);
    fs.exists(realPath, (exist) => {
        if (!exist) {
            res.writeHead(404, "File not Found");
            res.end();
        } else {
            fs.readFile(realPath, (err, fd) => {
                if (err) {
                    res.writeHead(500, "Server Error");
                    res.write(err);
                    res.end();
                } else {
                    res.writeHead(200, {"Content-Type": mime[type]});
                    res.write(fd, "binary");
                    res.end();
                }
            });
        }
    });
	
}).listen(8888);

console.log("Server has started on 8888");
