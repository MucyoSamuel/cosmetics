#!/usr/bin/env node
const port = (process.argv[2] || process.env.PORT || 3000);
const { readFile, readFileSync } = require('fs');
const http = require('http');

const file = readFileSync('./index.html' , 'utf8');

http.createServer((req,res)=> {
    console.log(req.url);
    res.statusCode =200;
    res.setHeader('Content-Type','text/html');
    res.end(file);

}).listen(port)

console.log('server running at http://localhost:${port}/');