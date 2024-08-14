const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'monorail.proxy.rlwy.net',
    user: 'root',
    password: 'wlAeKZhmBojdrbvIHqLKKFSWSbitltyA',
    database: 'railway',
});

export default connection;
