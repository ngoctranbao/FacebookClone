import {connectMysql} from './config/configMysql.cjs';
import { createServer } from './utils/createServer.js';


const port = 8000
connectMysql()
const server = createServer();

server.listen(port, () => {
  console.log("listening on port: " + port);
});