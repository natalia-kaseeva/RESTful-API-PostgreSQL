const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'students',
    password: 'qzx19p2091',
    port: 5432,
});

module.exports = pool;