/*jshint esversion: 6 */
const net = require(`net`);

  let server = net.createServer((socket) =>{
    socket.setEncoding('utf8');
    socket.on('data', (chunk) => {
      // console.log(`${chunk}`);

      let headers = chunk.split('\n');
      console.log(`HEADERS: ${headers[0]}`);

      let method = headers[0].split(' ')[0];
      console.log(`METHOD: ${method}`);

      let uri = headers[0].split(' ')[1];
      console.log(`URI: ${uri}`);

      socket.write('method:' + method);
      socket.write('uri' + uri);
      socket.end();
    });

  });

  server.listen(8080, "0.0.0.0", () =>{
    // console.log(`the current server is open`);
  });


