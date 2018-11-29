var uname=document.getElementById('uname'),upwd=document.getElementById('upwd'),cupwd=document.getElementById('cupwd'),email=document.getElementById('email');
var iuname=false,iupwd=false,icupwd=false,iemail=false;
uname.onblur=function(){
    if(this.value==''){
        var content=this.parentNode.previousElementSibling.innerHTML.slice(0,-1)
        this.nextElementSibling.innerHTML=`<img src="img/commom/err.png" alt="">${content}不能为空`;
        iuname=false;
    }else if(!vali(this,/^\w{1,10}$/)){this.nextElementSibling.innerHTML='<img src="img/commom/err.png" alt="">10个以内的字母、数字或下划线的组合';iuname=false;}else{this.nextElementSibling.innerHTML='<img src="img/commom/ok.png" alt="">';iuname=true;}
}
uname.onfocus=function(){
    this.nextElementSibling.innerHTML=`*10个以内的字母、数字或下划线的组合`
}
upwd.onblur=function(){
    if(this.value==''){
        var content=this.parentNode.previousElementSibling.innerHTML.slice(0,-1)
        this.nextElementSibling.innerHTML=`<img src="img/commom/err.png" alt="">${content}不能为空`;
        iupwd=false;
    }else if(!vali(this,/^\w{6,8}$/)){this.nextElementSibling.innerHTML='<img src="img/commom/err.png" alt="">6-8个以内的字母、数字或下划线的组合';iupwd=false;}else{this.nextElementSibling.innerHTML='<img src="img/commom/ok.png" alt="">';iupwd=true;}
}
upwd.onfocus=function(){
    this.nextElementSibling.innerHTML=`*6-8个以内的字母、数字或下划线的组合`
}
email.onblur=function(){
    if(this.value==''){
        var content=this.parentNode.previousElementSibling.innerHTML.slice(0,-1)
        this.nextElementSibling.innerHTML=`<img src="img/commom/err.png" alt="">${content}不能为空`;
        iemail=false;
    }else if(!vali(this,/^\w+@[0-9A-Za-z-]+(\.[0-9A-Za-z-]+)+$/)){this.nextElementSibling.innerHTML='<img src="img/commom/err.png" alt="">正确的邮箱地址';iemail=false;}else{this.nextElementSibling.innerHTML='<img src="img/commom/ok.png" alt="">';iemail=true;}
}
email.onfocus=function(){
    this.nextElementSibling.innerHTML=`*正确的邮箱地址`
}
cupwd.onblur=function(){
    if(cupwd.value==upwd.value&&cupwd.value!=''){this.nextElementSibling.innerHTML='<img src="img/commom/ok.png" alt="">';icupwd=true;}else{this.nextElementSibling.innerHTML='<img src="img/commom/err.png" alt="">密码不一致';icupwd=false;}
}
function vali(txt,reg){
  //用reg测试当前文本框的内容
  if(reg.test(txt.value))
    {return true;}else{return false;}
}
ureg.onclick=function(){
    uname.onblur();
    upwd.onblur();
    email.onblur();
    cupwd.onblur();
    if(iuname&&iupwd&&iemail&&icupwd){alert('可以注册')}else{alert('请正确填写信息')}
}
