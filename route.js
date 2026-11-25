// var http=require('http')

// var server = http.createServer(function (req,res){
//     if(req.url=='/'){
//         res.writeHead(200,{'Content-Type': 'text/html'})
//         res.write('<html><body><p>this si home</p></body></html>')
//         res.end();
//     }
//     else if(req.url=='/student'){
//         req.writeHead(200,{'Content-Type':'text/html'})
//         res.write('<html><body><p>this si home</p></body></html>')
//         res.end();
//     }
//     else if (req.url == "/admin") {
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write('<html><body><p>This is admin Page.</p></body></html>');
//       res.end();
//   }
//   else       res.end('Invalid Request!');
// })

// server.listen(8000);
// console.log("server")

var fs=require('fs')

fs.appendFile('newfile.txt','qoeaih',function (err){
    if (err) throw err;
 console.log('File is Appended successfully.');
})