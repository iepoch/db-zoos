const express = require('express');
const helmet = require('helmet');

const server = express();
const zooRouter = require('./data/helpers/zooDb')

server.use(express.json());
server.use(helmet());
server.use('/api/zoos', zooRouter)
// endpoints here
server.get('/', (req, res) => {
  res.send("The Server is Alive")
})


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
