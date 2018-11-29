//导入路由器以及中间件
const express=require('express');
const userRouter=require('./routes/user.js');
const bodyParser=require('body-parser');
//创建服务器
var app=express();
app.listen(3000);
//使用bodyparser
app.use(bodyParser.urlencoded({extended:false}));
//托管静态文件到public目录下
app.use(express.static('public'));
//把用户路由器引用并挂载到/user下
app.use('/user',userRouter);


