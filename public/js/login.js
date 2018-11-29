var uname=document.getElementById('uname'),upwd=document.getElementById('upwd');
uname.onblur=upwd.onblur=function(){
    if(this.value==''){
        var content=this.parentNode.previousElementSibling.innerHTML.slice(0,-1)
        this.nextElementSibling.innerHTML=`${content}不能为空`
    }
}