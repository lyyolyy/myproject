$(function(){
    if(sessionStorage.getItem('uid')){
        $.ajax({
            url:'http://127.0.0.1:3000/product/shoppingcart',
            type:'get',
            data:{uid:sessionStorage.getItem('uid')},
            success: function(res) {
                if(res.code==1){
                   /*  console.log(res.data)
                    var frag=document.createDocumentFragment();
                    for(var i in res.data){
                        var tr=document.createElement('tr');
                        var checks=document.createElement('td');
                        var check=document.createElement('input');
                        check.type='checkbox';
                        checks.appendChild(check);
                        tr.appendChild(checks);
                        console.log(tr)
                        for(var e in res.data[i]){
                            var td=document.createElement('td');
                            td.innerHTML=res.data[i][e];
                            tr.appendChild(td);
                        }
                        frag.appendChild(tr);
                    }
                    var tbody=document.getElementById('tableBody');
                    tbody.appendChild(frag); */
                    var html='';
                    for(var i in res.data){
                        html+=`
                        <tr>
                            <td><input type="checkbox" name="ischeck"></td>
                            <td>${res.data[i].title}</td>
                            <td>${res.data[i].price}</td>
                            <td><button class='cart-count-less'>-</button><input type="text" min='0' value='${res.data[i].count}' maxlength="3" style="width:30px" id='Ccount' readonly><button class='cart-count-more'>+</button></td>
                            <td>${res.data[i].price*res.data[i].count}</td>
                            <td><a href="" class='delete'>删除</a></td>
                        </tr>`
                    }
                    var tbody=document.getElementById('tableBody');
                    tbody.innerHTML=html;
                }
            }
        })
    }
})