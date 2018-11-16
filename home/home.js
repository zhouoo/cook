//左侧菜单分类
//循环左侧菜单并把其放到左侧
var data1 = [
    {
        name: '家常菜',
        bg: ''
    }
    ,
    {
        name: '快手菜',
        bg: ''
    }
    ,
    {
        name: '肉',
        bg: ''
    }
    ,
    {
        name: '鸡蛋',
        bg: ''
    }
]
var data2 = [
    {
        name: '孕妇',
        bg: ''
    },
    {
        name: '儿童',
        bg: ''
    },
    {
        name: '婴儿',
        bg: ''
    }
]

//左侧菜单函数
// function zccd(htm,data){
//     for (var i = 0; i < data.length; i++) {
//         htm += `<li>
//                         <a href="">
//                             <i class="cat-icon"></i>
//                             <span class="menu-tabs">${data[i]}</span>
//                         </a>
//                     </li>`
//     }
// }
$(document).ready(function () {
    var menuClassify = document.getElementsByClassName('menu-classify')[0];
    console.log(menuClassify)
    var html1 = '';
    for (var i = 0; i < data1.length; i++) {
        html1 += `<li>
                        <a href="">
                            <i class="cat-icon" style="background:url(${data1[i].bg})"></i>
                            <span class="menu-tabs">${data1[i].name}</span>
                        </a>
                    </li>`
    }
    html1 += `<li>
                        <hr class="menu-classify-line">
                    </li>`
    for (var i = 0; i < data2.length; i++) {
        html1 += `<li>
                        <a href="">
                            <i class="cat-icon" style="background:url(${data2[i].bg})"></i>
                            <span class="menu-tabs">${data2[i].name}</span>
                        </a>
                    </li>`

    }
    // console.log(html1)
    menuClassify.innerHTML = html1;
})

//中间轮播图
$(document).ready(function (e) {

    var unslider04 = $('#recom-banner').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');
    $('.unslider-arrow04').click(function () {
        var fn = this.className.split('')[1];

        data04[fn]();

    });


});
//点击切换中间展示
$(document).ready(function(){
    $('#new-menu-list-column').slide({
        mainCell:".new-menu-list",
        effect:"left",
        scroll:3,
        vis:3,
        autoPage:true,
        prevCell: ".to-left",
        nextCell: ".to-right",
        pnLoop:false
    })
})

