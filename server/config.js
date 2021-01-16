const Pool = require('pg').Pool
const pool = new Pool({
    user: 'rncwitiu',
    host: 'raja.db.elephantsql.com',
    database: 'rncwitiu',
    password: 'dhf6famKoPg09tdCSiEvlnBbj73V6GtF',
    port: 5432,
  })
  
module.exports = pool;