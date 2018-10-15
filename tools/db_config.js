

// 配置数据库
const mysql = require('mysql');

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: 'topic'
  });

  module.exports = db;