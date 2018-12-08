//先要动态加载头部，以及内容
//内容功能
$('.small-pic li img').on('click',function(){
    $('.small-pic li img.show').removeClass('show');
    $(this).addClass('show');
    var src=$(this).attr('src');
    $('.good-pic-info .good-pic .big-pic img').attr('src',src)
});
var right=document.querySelector('.good-pic-info .good-pic .big-pic .rightArrow');
var left=document.querySelector('.good-pic-info .good-pic .big-pic .leftArrow');
right.addEventListener('click',function(){
    var a=document.querySelector('.small-pic li img.show');
    a.className='';
    if(a.parentNode.nextElementSibling){
        a.parentNode.nextElementSibling.firstElementChild.className='show';
        document.querySelector('.good-pic-info .good-pic .big-pic img').src=a.parentNode.nextElementSibling.firstElementChild.src;
    }else{a.parentNode.parentNode.firstElementChild.firstElementChild.className='show'; document.querySelector('.good-pic-info .good-pic .big-pic img').src=a.parentNode.parentNode.firstElementChild.firstElementChild.src}
})
left.addEventListener('click',function(){
    var a=document.querySelector('.small-pic li img.show');
    a.className='';
    if(a.parentNode.previousElementSibling){
        a.parentNode.previousElementSibling.firstElementChild.className='show';
        document.querySelector('.good-pic-info .good-pic .big-pic img').src=a.parentNode.previousElementSibling.firstElementChild.src;
    }else{a.parentNode.parentNode.lastElementChild.firstElementChild.className='show'; document.querySelector('.good-pic-info .good-pic .big-pic img').src=a.parentNode.parentNode.lastElementChild.firstElementChild.src}
})
$('.good-pic-info .good-info .good-content .good-count-less').on('click',function(){
    if($('#Gcount').val()>1){$('#Gcount').val(`${$('#Gcount').val()-1}`);$('.good-pic-info .good-info .good-content .good-total').html(`￥${parseFloat($('#Gcount').val())*parseFloat($('.good-newprice').html())}元`)}
})
$('.good-pic-info .good-info .good-content .good-count-more').on('click',function(){
    if($('#Gcount').val()<99){$('#Gcount').val(`${Number($('#Gcount').val())+1}`);$('.good-pic-info .good-info .good-content .good-total').html(`￥${parseFloat($('#Gcount').val())*parseFloat($('.good-newprice').html())}元`)}
})
/* $('#Gcount').on('change',function(){
    console.log(1);
    
}) */
