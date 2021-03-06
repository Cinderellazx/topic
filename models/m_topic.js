const db = require('../tools/db_config');

const findAllTopics = (cb) => {
    const sqlStr = "SELECT *FROM `topics` ORDER BY createdAt DESC";
    db.query(sqlStr, (err,data) => {
        if(err) {
            return cb(err);
        }

        cb(null,data);
    })
};

const addTopic = (formdata,cb) => {
    const sqlStr = "INSERT INTO `topics` SET ?";
    db.query(sqlStr, formdata, (err,data) => {
        if(err) {
            return cb(err);
        }

        cb(null,data);
    })
}

exports.findDetailTopic = (id,cb)=> {
    const sqlStr = "SELECT * FROM `topics` WHERE id = ?";
    db.query(sqlStr,id,(err, data) => {
        if(err) {
            return cb(err);
        }
        cb(null,data);
    })
}

exports.editTopic = (body,id,cb) => {
    const sqlStr = "UPDATE `topics` SET title=?,content=? WHERE id=?";
    db.query(sqlStr,[body.title,body.content,id], (err,data) => {
        if(err) {
            return cb(err);
        }
        cb(null,data);
    })
};

exports.deleteTopic = (id,cb) => {
    const sqlStr = "DELETE FROM `topics` WHERE id = ?";
    db.query(sqlStr, id, (err,data) => {
        if(err) {
            return cb(err);
        }
        cb(null,data); 
    })
}

exports.findAllTopics = findAllTopics;
exports.addTopic = addTopic;