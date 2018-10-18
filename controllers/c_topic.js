const m_topic = require('../models/m_topic');
const moment = require('moment');


const showTopic = (req,res) => {
    // res.send('话题页');

    // console.log(req.session);
    
    m_topic.findAllTopics((err,data) => {
        if(err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }

        res.render('index.html',{
            topics: data,
            user: req.session.user
        });

    });
};

const showCreateTopic = (req,res) => {
    res.render('topic/create.html',{
        user: req.session.user
    });
};

const publishTopic = (req,res) => {
    const body = req.body;

    body.userId = req.session.user.id;
    body.createdAt = moment().format();
    m_topic.addTopic(body, (err,data) => {
        if(err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }

        res.send({
            code: 200,
            message: '添加成功'
        })
    });
};


exports.handleSignout = (req,res) => {
    delete req.session.user;
    res.redirect('/signin');
};


exports.showDetailTopic = (req,res) => {

    const id = req.params.topicId;
    m_topic.findDetailTopic(id,(err, data) => {
        if(err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }

        // console.log(data);
        
        res.render('topic/show.html',{
            topic: data[0],
            user: req.session.user
        })
    })
};


exports.showEdit = (req,res) => {
    const id = req.params.topicId;

    m_topic.findDetailTopic(id,(err, data) => {
        if(err) {
            return res.send({
                code: 500,
                message: '服务器错误'
            })
        }
        
        res.render('topic/edit.html',{
            topic: data[0],
            user: req.session.user
        })
    })
};

exports.handleEdit = (req,res) => {
    const body = req.body;

    const id = req.params.topicId;

    m_topic.editTopic(body, id, (err,data) => {
        if(err) {
            return res.send({
                code: 500,
                message: err.message
            })
        }
        res.send({
            code: 200,
            message: '修改成功'
        })
    })
};

module.exports.showTopic = showTopic;
exports.showCreateTopic = showCreateTopic;
exports.publishTopic = publishTopic;
