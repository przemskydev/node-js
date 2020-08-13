const http = require('http');
const port = 3000;
const handler = (request, response) => {
  console.log('New user!')
  response.end('Hello node!!')
}

const server = http.createServer(handler);

server.listen(port, (err) => {
  if(err){
    return console.log('Some error')
  }

  console.log('Server is running...')
});