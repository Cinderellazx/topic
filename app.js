const express = require('express');
// 路由分发js文件导入需注意使用路径。且必须用app调用use(router)
const router = require('./router');
const artTemplate = require('express-art-template');
const bodyParser = require('body-parser');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

const options = {
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'root',
	database: 'topic'
};

const sessionStore = new MySQLStore(options);

const app = express();

// 配置包
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
	key: 'session_cookie_name',
	secret: 'session_cookie_secret',
	store: sessionStore,
	resave: false,
	saveUninitialized: false
}));
  

// 统一处理静态资源
app.use('/node_modules',express.static('./node_modules'));
app.use('/public',express.static('./public'));



app.use(router);
app.listen(12345, () => {
    console.log('success');
});
