/*jshint esversion: 6 */
const net = require(`net`);
const content = require( "./content.js");


  let server = net.createServer((socket) =>{

    socket.setEncoding('utf8');
    socket.on('data', (chunk) => {
      console.log(`${chunk}`);

      let headers = chunk.split('\n');
      console.log(`HEADERS: ${headers[0]}`);

      let method = headers[0].split(' ')[0];
      console.log(`METHOD: ${method}`);

      let uri = headers[0].split(' ')[1];
      console.log(`URI: ${uri}`);

      socket.write('HTTP/1.1 200 OK');
      socket.write('\nContent-Type: text/html; charset=utf-8');
      socket.write(`\nContent-Length: ${content.index_html.length}`);
      socket.write(`\n\n`);
      socket.write(content.index_html);
      socket.end();

      function function_name(argument) {
        // body...
      }
    });
  });

  server.listen(8080, "0.0.0.0", () =>{
    // console.log(`the current server is open`);
  });


