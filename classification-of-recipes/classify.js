//----------------------------------菜单分类-----------------------------------

function  cdfl(){
    var cdflhtml =``;
    for(var i=0;i<data8.length;i++){
        cdflhtml +=`<div class="topics-name clearfix">
                        <h3 class="topic-titles f-left">${data8[i].name}</h3>
                        <div class="cate-content f-left">`
                        for(var j = 0; j <data8[i].classify.length;j++){

                            console.log(data8[i].classify[j].title)
                            cdflhtml +=`<div class="topic-content f-left">
                            <h4 class="cate-title">${data8[i].classify[j].title}</h4>
                            <ul class="cate-list">`
                            for(var m = 0; m <data8[i].classify[j].classify.length;m++){
                                cdflhtml += `<li class="cate-item">
                                    <a href="">${data8[i].classify[j].classify[m].name}</a>
                                </li>`
                            }
                            cdflhtml +=`</ul>
                                           </div>`
                        }
            cdflhtml +=     `
                        <div class="show-all f-left">
                            <a href="" class="f-right">展示全部</a>
                        </div>
                    </div>
                    </div>`
    }
    $('.cdflhtml').html(cdflhtml)
}
$(document).ready(function(){
    cdfl();
})
