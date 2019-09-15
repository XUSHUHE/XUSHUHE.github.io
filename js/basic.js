/* $(function () {
    var circleShowImg = $('#circleShowImg');
    
}) */
$(document).ready(function () {
    $('.container').load('./blog_main.html');
    togglePage();
    /* paging(1);*/
    toggleIndex(); 
})

function toggleIndex() {
    $(".pagingDiv .pageItem").click(function (e) {
        paging($(this).data("index"));
    });
    $(".first").click(function (e) {
        // paging(1);
    });
    $(".last").click(function (e) {
        // paging(7);
    });
    $(".pre").click(function (e) {
        // paging(7);
    });
    $(".next").click(function (e) {
        // paging(7);
    });
}
//导航栏切换页面
function togglePage() {
    var obj = $(".blogNav_item");
    obj.click(function (e) {
        e.preventDefault();
        if ($(this).hasClass("active")) {
            return;
        }
        var target = $(this).attr("id") + ".html";
        $('.container').load(target);
        obj.removeClass("active");
        $(this).addClass("active");
    });
}
//分页条
function paging(target_Index) {
    var pageSize = 5; //分页条展示5个页码
    var allIndex = 10; //总页数
    var targetIndex = target_Index || 1; //当前页
    var i_beginIndex = 1; //分页条显示的开始索引
    var i_endIndex = pageSize; // 分页条显示的结束索引   
    if (i_endIndex >= allIndex) { //结束索引最大为总页数
        i_endIndex = allIndex;
    } else { //即i_endIndex < allIndex
        i_beginIndex = targetIndex - Math.floor(pageSize / 2); //假设目标页码为分页条中心页码
        //开始索引只能在1~最后一次显示的分页条的开始索引之间
        if (i_beginIndex < 1) { //开始索引只能大于等于1
            i_beginIndex = 1;
        } else if (i_beginIndex >= allIndex - pageSize + 1) {
            i_beginIndex = allIndex - pageSize + 1; //最后一次分页条的开始索引
        }
        i_endIndex = i_beginIndex + pageSize - 1; //根据开始索引,求出结束索引
    }
    var obj = $(".pagingDiv>.pageItem");
    var begin = i_beginIndex;
    for (var i = i_beginIndex; i <= i_endIndex; i++) {
        if(i==targetIndex){
            obj.removeClass("active");
            $(obj[i-1]).addClass("active");
        }else{
            $(obj[i-1]).data("index", begin);
            $(obj[i-1]).html(begin);
        }
        begin++;
       /*  switch (i) {
            case 0:
            case len - 1:
                $(obj[i]).data("index", i + 1);
                break; 
            case 1:
                $(obj[i]).data("index", targetIndex - 1 >= 1 ? targetIndex - 1 : 1);
                break;
            case len - 2:
                $(obj[i]).data("index", targetIndex + 1 <= allIndex ? targetIndex + 1 : allIndex);
                break;
            default:
                $(obj[i]).data("index", begin);
                $(obj[i]).text(begin);
                begin++;
        } */
    }
    
}