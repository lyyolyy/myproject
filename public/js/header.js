$(function(){
    $.ajax({
        url:'http://127.0.0.1:3000/user/islogin',
        type:'get',
        success: function(res) {
            console.log(res);
            if(res.ok==1){$('#unlog').css('display','none');$('#loged').css('display','block');$('#loged>span').html(`您好，${res.uname}, 欢迎您回来！`)}
        }
    })
})
$('#logout').on('click',function(){
    $.ajax({
        url:'http://127.0.0.1:3000/user/signout',
        type:'get',
        success: function(res) {
            window.reload();
        }
    })
})