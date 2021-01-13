const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', function() {
    console.log('Successfully connected to game server');
    conn.write('Name: EA');
  })
  conn.on('data', (data) => {
    console.log("data has come!")
    console.log(data);
  });
  

  return conn;
}

module.exports = {connect};
