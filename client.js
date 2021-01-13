const net = require('net');
const { setInterval } = require('timers');

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

    // tells server name value
    conn.write('Name: EA');
    
    // setInterval(() => {
    //   // tells server command "up"
    //   conn.write('Move: up');
      
    // }, 1000);
    // conn.write('Move: right');

    // setTimeout(() => {
    //   conn.write('Move: right');
    // }, 1000);


  })

  // upon receival of data, message to client that data has come and show what data is
  conn.on('data', (data) => {
    console.log("data has come!")
    console.log(data);
  });
  

  return conn;
}

module.exports = {connect};
