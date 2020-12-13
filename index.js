const express = require('express');
const app = express();
const localtunnel = require('localtunnel');


(async () => {
  const tunnel = await localtunnel({ port: 3000 });

  // the assigned public url for your tunnel
  // i.e. https://abcdefgjhij.localtunnel.me
  tunnel.url('http://127.0.0.1:8080');

  tunnel.on('close', () => {
    // tunnels are closed
  });
})();



var server = app.listen(3000, function () {
    console.log('Server is running on port 3000...');
});
app.use(express.static('public'));
