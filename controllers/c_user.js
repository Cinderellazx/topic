const m_user = require('../models/m_user');

//   connection.connect();

const showSignin = (req, res) => {
    res.render('signin.html');
};


const handleSignin = (req,res) => {

    const body = req.body;
    // console.log(body);

    // 验证邮箱
    m_user.checkEmail(body.email, function(err,data) {
        if(err) {
            // throw err;
            return  res.send({
                code: 500,
                message: '服务器错误'
            })
        }

        if(!data[0]) {
            return res.send({
                code: 100,
                message: '邮箱不存在'
            });
        }
        

        if(data[0]) {
            // 邮箱存在。需要验证密码是否正确
            // console.log(data);
            if(body.password != data[0].password) {
                return  res.send({
                    code: 201,
                    message: '密码错误'
                });    
            }
            
            req.session.user = data[0];
            res.send({
                code: 200,
                message: '登录成功'
            });
        }
        
    })


    // const sqlStr = "SELECT *FROM `users` WHERE email=?";
    // connection.query(sqlStr, body.email, (err,data) => {
    //     if(err) {
    //         // throw err;
    //         return  res.send({
    //             code: 500,
    //             message: '服务器错误'
    //         })
    //     }

    //     //  测试得到的data数据
    //     // 当邮箱不存在时，返回data为一个空数组；
    //     // 邮箱存在时，返回一个数组，数组内为一保存着对应邮箱的数据对象。
    //     // console.log(data);

    //     if(!data[0]) {
    //         return res.send({
    //             code: 100,
    //             message: '邮箱不存在'
    //         });
    //     }

    //     if(data[0]) {
    //         // 邮箱存在。需要验证密码是否正确
    //         // console.log(data);
    //         if(body.password != data[0].password) {
    //           return  res.send({
    //               code: 201,
    //               message: '密码错误'
    //           });    
    //         }
            
            
    //         res.send({
    //             code: 200,
    //             message: '登录成功'
    //         });
            
    //     }
        
    // });
};

exports.showSignup = (req,res) => {
    res.render('signup.html');
}
module.exports.showSignin = showSignin;
module.exports.handleSignin = handleSignin;