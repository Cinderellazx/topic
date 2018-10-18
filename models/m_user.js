
const db = require('../tools/db_config');

// 数据库操作是异步操作，要想操作err和data，必须使用回调函数传参的方式得到。
const checkEmail = function (email,cb) {

    const sqlStr = "SELECT *FROM `users` WHERE email=?";
    
    db.query(sqlStr, email, (err,data) => {
        if(err) {
            return cb(err);
        }
        cb(null,data);
    });
};

exports.checkNickname = function(nickname, cb) {
    const sqlStr = "SELECT *FROM `users` WHERE nickname=?";
    
    db.query(sqlStr, nickname, (err,data) => {
        if(err) {
            return cb(err);
        }
        cb(null,data);
    });
}


exports.addUser = function(body, cb) {
    const sqlStr = "INSERT INTO `users` SET ?";

    db.query(sqlStr,body, (err,data) =>{
        if(err) {
            return cb(err);
        }
        cb(null,data);
    })
}
module.exports.checkEmail = checkEmail;