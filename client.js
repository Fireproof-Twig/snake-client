const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //on connection

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CAB")
  })

  // update incoming data
  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = {
  connect
};