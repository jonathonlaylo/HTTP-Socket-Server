/*jshint esversion: 6 */
const net = require(`net`);
const content = require( "./content.js");


  let server = net.createServer((socket) =>{

    socket.setEncoding('utf8');
    socket.on('data', (chunk) => {
      console.log(`${chunk}`);

      let headers = chunk.split('\n');
      // console.log(`HEADERS: ${headers[0]}`);

      let method = headers[0].split(' ')[0];
      // console.log(`METHOD: ${method}`);

      let uri = headers[0].split(' ')[1];
      // console.log(`URI: ${uri}`);

      let date = (new Date(Date.now()));
      // console.log(`date: ${date}`);

      // let response = `HTTP/1.1 200 OK 
      //     \nContent-Type: text/html; charset=utf-8
      //     \nContent-Length: ${content.index_html.length}
      //     \nDate: ${date}
      //     \nServer: Some Server
      //     \n\n
      //     content.index_html`;

      //     console.log(response);

      // function headerGenerater()
            
          // socket.write(`HTTP/1.1 200 OK`);
          // socket.write(`\nContent-Type: text/html; charset=utf-8`);
          // socket.write(`\nContent-Length: ${content.index_html.length}`);
          // socket.write(`\nDate: ${date}`);
          // socket.write(`\nServer: Some Server`);
          // socket.write(`\n\n`);
          // socket.write(content.index_html);
          // socket.end();
    });

  });

  server.listen(8080, "0.0.0.0", () =>{
    // console.log(`the current server is open`);
  });


