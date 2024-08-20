const express = require('express')
const connectMongo = require('./config/configMongo');
const connectMysql = require('./config/configMysql');

const app = express()
const port = 8000

connectMongo()
connectMysql()

app.listen(port, () => {
  console.log(`Example app listening on ports ${port}`)
})