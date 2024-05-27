const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('demofile.html', (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.write('File not found');
            res.end();
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8000, () => {
    console.log('Server is listening on port 8000');
}); 