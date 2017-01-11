/*jshint esversion: 6 */
const net = require(`net`);
const content = require( "./content.js");
const PORT = process.env.POR || 8080;

let server = net.createServer((socket) =>{

  socket.setEncoding('utf8');
  socket.on('data', (chunk) => {
  // console.log(`${chunk}`);
  let headers = chunk.split('\n');
  // console.log(`HEADERS: ${headers[0]}`);
  let method = headers[0].split(' ')[0];
  // console.log(`METHOD: ${method}`);
  let uri = headers[0].split(' ')[1];
  // console.log(`URI: ${uri}`);
  let date = (new Date(Date.now()));
  // console.log(`date: ${date}`);
  socket.write('HTTP/1.1 200 OK');
  socket.write('\nContent-Type: text/html; charset=utf-8');
  // socket.write(`\nContent-Length: ${content.index_html.length}`);
  socket.write(`\n\n`);
  // socket.write(content.index_html);
  switch(uri){
      case "/index_html":
      socket.write(content.index_html);
      break;
      case "/helium_html":
      socket.write(content.helium_html);
      break;
      case "/hydrogen_html":
      socket.write(content.hydrogen_html);
      break;
      case "/fourohfour_html":
      socket.write(content.fourohfour_html);
      break;
  }
  socket.end();
  });
});
server.listen(PORT, "0.0.0.0", () =>{
  // console.log(`the current server is open`);
});