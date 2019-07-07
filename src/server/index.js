const express = require('express');
const path = require('path');
const cors = require('cors')
const router = require('./routes');

const app = express();

app.use(cors());
app.use('/', router);

if(process.env.NODE_ENV == "production"){
  const client = express.static(path.join(__dirname, '../../build'));
  const assets = express.static(path.join(__dirname, '../../assets'));
  app.use('/client', client);
  app.use('/assets', assets);
  app.get('*', (_, res) =>{
    res.sendFile(path.join(__dirname, '../../build/index.html'));
  });
}

const port = process.env.PORT || 3000;
app.listen(port);

console.log('App is listening on port ' + port);