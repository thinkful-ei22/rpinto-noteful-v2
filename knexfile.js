'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://uedcqgiq:cwyM140VxIn6fiVlqYESQ8IbA3Sxms2x@pellefant.db.elephantsql.com:5432/uedcqgiq',
    debug: true, // http://knexjs.org/#Installation-debug
    pool: { min: 1, max: 2 }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
