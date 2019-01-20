console.log('Hello Node');

var querystring = require('querystring');
var https = require('https');
var fs = require('fs');

const post_data = querystring.stringify({
    'grant_type': 'client_credentials' ,
    'client_id': 'ydWJcno8J9PvvE-IorniEyXJ5HkJ49kQkyT1LyJH7PQ=', 
    'client_secret': 'ZBCfzShA0ExMu7C2FxSPIpGlZnI_VMGBaKN56i4n0Fs_M_o9Y56JYg=='
});

const options = {
  hostname: 'https://outpost.mapmyindia.com/api/security/oauth/token',
  port: 80,
  path: '/',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    //'Content-Length': data.length,
    'Authorization': 'Bearer f9038fe2-6341-4733-8910-ed22fe10d107'
  }
}

const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
  console.error(error)
})

req.end()