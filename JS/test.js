console.log('Hello Node');

const https = require('https')

const data = JSON.stringify({
    query: 'choco monk' 
  })

const options = {
  hostname: 'https://atlas.mapmyindia.com/api/places/search/json?',
  port: 80,
  path: 'query=choco',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
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