# json-server-multiple
> Multiple apis support for json server.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]


## installation
```bash
npm i -S @feizheng/json-server-multiple
```

## usage
```javascript
// config.js
import path from 'path';
export const MOUNT_POINT = '/api/v1/';
export const DB_JSON =  path.join(__dirname, './database/db.json');
export const STRINGIFY_INDENT = 2;
export const APIS = path.join(__dirname, './apis');


// app.js
import JsonServer from 'json-server';
import JsonServerMultiple from 'json-server-multiple';

import {
  MOUNT_POINT,
  DB_JSON,
  APIS
} from './config';


// create multiple apis
JsonServerMultiple.create(DB_JSON, APIS);
const server = JsonServer.create();
const router = JsonServer.router(DB_JSON);
const middlewares = JsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use(MOUNT_POINT, router);


server.listen(3001, () => {
  console.log('JSON Server is running')
});

```

## resouces
- https://github.com/Marak/faker.js


## license
Code released under [the MIT license](https://github.com/afeiship/json-server-multiple/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/json-server-multiple
[version-url]: https://npmjs.org/package/@feizheng/json-server-multiple

[license-image]: https://img.shields.io/npm/l/@feizheng/json-server-multiple
[license-url]: https://github.com/afeiship/json-server-multiple/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/json-server-multiple
[size-url]: https://github.com/afeiship/json-server-multiple/blob/master/dist/json-server-multiple.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/json-server-multiple
[download-url]: https://www.npmjs.com/package/@feizheng/json-server-multiple
