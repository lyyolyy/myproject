//商品路由器
const express=require('express');
//引入mysql连接模块，..表示上一级目录,哪一个模块要操作sql就引用连接模块
const pool=require('../pool.js');
//创建空路由器
var router=express.Router();

//往路由器中添加路由
//详情页加载
router.get('/detail',(req,res)=>{
    var pid=req.query.pid;
    if(!pid){pid=1}
    pool.query('SELECT * FROM PRODUCT WHERE pid=?',[pid],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,data:result[0]})
        }
    })
})



//导出路由器
module.exports=router;