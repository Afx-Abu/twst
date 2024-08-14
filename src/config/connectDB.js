const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'monorail.proxy.rlwy.net',
    user: 'root',
    password: 'wlAeKZhmBojdrbvIHqLKKFSWSbitltyA',
    database: 'railway',
    port: 11033 // Make sure to include the port if it's not the default 3306
});


export default connection;
