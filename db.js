const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'node_postgres',
    password: 'qzx19p2091',
    port: 5432,
});

module.exports = pool;