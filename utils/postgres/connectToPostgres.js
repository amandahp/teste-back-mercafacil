const {  Pool } = require('pg')
const connectionString = 'postgres://postgres:postgres@localhost:5432/amandahp';

const client = new Pool({
    connectionString
  })


module.exports = client