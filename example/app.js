import JsonServer from 'json-server';
import JsonServerMultiple from 'json-server-multiple';

import {
  MOUNT_POINT,
  DB_JSON,
  APIS
} from './config';


// create multiple apis
const jsonMulti = JsonServerMultiple.create(DB_JSON, APIS);
const server = JsonServer.create();
const router = JsonServer.router(DB_JSON);
const middlewares = JsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(MOUNT_POINT, router);


server.listen(3001, () => {
  console.log('JSON Server is running')
});
