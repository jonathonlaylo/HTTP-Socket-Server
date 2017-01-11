/*jshint esversion: 6 */
const net = require(`net`);
const PORT = process.env.PORT || 8080;

var client = new net.createConnection(PORT);

client.on('connect', () => {
  console.log('connected to your server');
});

client.on('data', (chunk) => {
});

client.on('end', () => {
  console.log('disconnected to your server');
});