import {connectMysql} from './config/configMysql.cjs';

// import pkg from './utils/createServer.js';
// const { createServer } = pkg;
import { createServer } from './utils/createServer.js';


const port = 8000
connectMysql()
const server = createServer();

server.listen(port, () => {
  console.log("listening on port: " + port);
});

// import express from 'express'
// import bodyParser from 'body-parser'
// import cors from 'cors'
// import { router } from "../routes/index.js";