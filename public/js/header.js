$(function(){
    $.ajax({
        url:'/user/islogin',
        type:'get',
        success: function(res) {
            if(res.ok==1){$('#unlog').css('display','none');$('#loged').css('display','block');$('#loged>span').html(`您好，${res.uname}, 欢迎您回来！`)}
        }
    })
})
$('#logout').on('click',function(){
    $.ajax({
        url:'/user/signout',
        type:'get',
        success: function(res) {
            window.reload();
        }
    })
})