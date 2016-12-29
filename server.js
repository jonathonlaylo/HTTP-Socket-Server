const net = require(`net`);
  
  let server = net.createServer((socket) =>{

    socket.on('data', (chunk) => {
      console.log(`vu${chunk}`);
    });

  });

  server.listen(8080, "0.0.0.0", () =>{
    console.log(`the current server is open`);
  });


