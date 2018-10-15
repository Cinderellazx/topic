
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic');
// 路由分发

const express = require('express');

const router = express.Router();

//  渲染登录页
router.get('/signin',c_user.showSignin);

// 处理登录
router.post('/signin',c_user.handleSignin);

// 渲染话题页
router.get('/', c_topic.showTopic);


module.exports = router;