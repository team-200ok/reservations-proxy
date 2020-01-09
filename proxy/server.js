const newrelic = require('newrelic');
const proxy = require('http-proxy-middleware');
const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// const { Pool } = require('pg')

// const pool = new Pool({ database: 'ReservationsModule' })

app.use(
  '/',
  proxy({ target: 'http://3.87.66.190:3010', changeOrigin: true })
);

app.listen(port, () => console.log(`We be serving at port: ${port}`));