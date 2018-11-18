





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
//--------------------------左侧菜单---------------------------
function zcd(){
    var menuClassify = document.getElementsByClassName('menu-classify')[0];
    console.log(menuClassify)
    var html1 = '';
    for (var i = 0; i < data1.length; i++) {
        html1 += `<li>
                        <a href="">
                            <i class="cat-icon" style="background-position: 0 ${data1[i].bpy}px"></i>
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
                            <i class="cat-icon" style="background-position: 0 ${data2[i].bpy}px"></i>
                            <span class="menu-tabs">${data2[i].name}</span>
                        </a>
                    </li>`

    }
    // console.log(html1)

    menuClassify.innerHTML = html1;
}


//--------------------------------------中上banner图--------------------

function zsbn(){
    var reBanner =``;
    for(var i=0;i<data3.length;i++){
        reBanner+=`<li style="height:280px">
                        <a href="" class="recom-banner-pic">
                            <img src="${data3[i].url}" alt="">
                            <span class="recom-banner-title">${data3[i].name}</span>
                        </a>
                    </li>`
    }
    var dots='';
    for(var i = 0;i<data3.length;i++){
        dots +=`<li></li>`
    }
    console.log(dots)
    $('.recom-banner-a').html(reBanner)
    $('.dots').html(dots)
}

//---------------------新秀菜谱----------------------------
function xxcp(){
    var xxcphtml =``;
    for(var i = 0; i < 9;i++){
        xxcphtml += `<li class="new-menu-item">
                            <a href="" class="new-menu-item-pic">
                                <img src="${data4[i].url}" alt="">
                            </a>
                            <h2 class="new-menu-item-name">${data4[i].name}</h2>
                        </li>`;
    }
    $('.new-menu-list').html(xxcphtml)
}


//--------------------------流行菜单------------------------------------

function zjlx(){
    var zjlxhtml =``;
    for(var i = 0; i < 12;i++){
        zjlxhtml += `<li class="recently-popular-item">
                            <a href="" class="recently-popular-pic">
                            <img src="${data4[i].url}" alt="">
                            </a>
                            <div class="recently-popular-name">
                                <a href="" class="recently-popular-title">${data4[i].name} </a>
                                <div class="recently-popular-stats">
                                    <a href="" class="recently-popular-auth">墨七</a>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span class="recently-popular-did">2904</span>
                                    <span>做过</span>
                                </div>
                            </div>
                        </li>`;
    }
    $('#recently-popular-list').html(zjlxhtml)
}

//------------------------------时令蔬菜---------------------------------------

function sssc(){
    var ssschtml = ``;
    for(var i = 0; i < data5.length;i++){
        ssschtml += `<li class="seasonable-food-item">
                            <a href="">
                                <img src="${data5[i].url}" alt="" class="seasonable-food-pic">
                                <span class="seasonable-food-name">${data5[i].name}</span>
                            </a>
                        </li>`
    }
    $('#seasonable-food-list').html(ssschtml)
}



//---------------------------话题----------------------------------

function ht(){
    var hthtml =``;
    for(var i = 0; i<data6.length; i++){
        hthtml += `<li class="pop-event-item clearfix">
                        <div class="f-left pop-event-info">
                            <div class="pop-event-name">${data6[i].name}</div>
                            <div class="pop-event-tails">${data6[i].info}</div>
                        </div>
                        <div class="f-right pop-event-pic">`
         for(var j=0;j < data6[i].url.length;j++){
            hthtml +=`<img src="${data6[i].url[j]}" alt="">`
         }
           hthtml +=`</div>
                    </li>`
    }
    $('.pop-event-list').html(hthtml)
}
//--------------------------流行搜索-------------------------------

function lxcd(){
    var lxcdhtml =``;
    for(var i =0;i<4;i++){
        lxcdhtml+=`<li class="popular-menu-item">
                        <a href="" class="popular-menu-pic">
                            <img src="${data4[i].url}" alt="">
                        </a>
                        <div class="popular-menu-name">
                            <a href="">${data4[i].name}</a>
                        </div>
                    </li>`
    }
    $('#popular-menu-list').html(lxcdhtml)
}

//-----------------------------流行搜索-----------------------------------

function lxss(){
    var lxsshtml = ``;
    for(var i = 0;i<10;i++){
        lxsshtml +=`<li class="popular-search-item">
                        <span class="popular-search-ranking">${i+1}</span>
                        <a href="">
                            <span class="popular-search-name">${data7[i].name}</span>
                        </a>
                        <i></i>
                    </li>`
    }
    $('.popular-search-list').html(lxsshtml)
}


//---------------------js动态加载结构------------------------------

$(document).ready(function () {
    zcd();
    console.log(123)
    zsbn();
    xxcp();
    zjlx();
    sssc();
    ht();
    lxcd();
    lxss()
})

//中间轮播图
$(document).ready(function () {

    $('#recom-banner').slide({
        titCell:".dots",
        mainCell:'.recom-banner-a',
        effect: "leftLoop",
        scroll:1,
        vis:1,
        easing:'swing',
        interTime:2500,
        delayTime:500,
        autoPage:true,
        autoPlay:true,
        trigger:'click',
    })


});
//点击切换中间展示
$(document).ready(function () {
    $('#new-menu-list-column').slide({
        mainCell: ".new-menu-list",
        effect: "left",
        scroll: 3,
        vis: 3,
        autoPage: true,
        prevCell: ".to-left",
        nextCell: ".to-right",
        pnLoop: false
    })
})

