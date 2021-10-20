var https = require('https');

const request = () => {
  setTimeout(()=> {
    var options = {
      //hostname: 'lavalink-graljadue.herokuapp.com',
      hostname: 'lavalink-graljadue.herokuapp.com',
      port: 443,
      path: '/',
      method: 'GET'
    };
    
    const req = https.request(options, (res) => {
      console.log('statusCode:', res.statusCode);
      console.log('headers:', res.headers);
    
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });
    
    req.on('error', (e) => {
      console.error(e);
    });
    req.end();
    request() 
  }, 60000)
}

module.exports = request;