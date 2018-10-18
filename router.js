
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

// 渲染新建话题页
router.get('/topic/create',c_topic.showCreateTopic);

// 发布话题
router.post('/publishTopic',c_topic.publishTopic);

// 退出登录
router.get('/signout',c_topic.handleSignout);

// 渲染话题详情页
router.get('/detail/:topicId',c_topic.showDetailTopic);


// 进入修改页
router.get('/topic/:topicId/edit',c_topic.showEdit);

// 修改话题
router.post('/editTopic/:topicId',c_topic.handleEdit);

// 删除话题
router.get('/topic/:topicId/delete',c_topic.handleDelete);

// 渲染注册页面
router.get('/signup',c_user.showSignup);

module.exports = router;