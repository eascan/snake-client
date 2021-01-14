const net = require('net');
const { IP, PORT, name } = require('./constants');

// const { setInterval } = require('timers');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('connect', function() {
    console.log('Successfully connected to game server');

    // tells server name value
    conn.write(`Name: ${name}`);
    
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

module.exports = { connect };
