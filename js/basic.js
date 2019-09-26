/* $(function () {
    var circleShowImg = $('#circleShowImg');
    
}) */
$(document).ready(function () {
    /* $("p").on("click",function(){
        alert("段落被点击了。");
      }); */
    reSize();
    $('.container').load('./blog_main.html');
    togglePage();
    toggleIndex();
    $(window).resize(function() {
        reSize();
    });
    carousel();
})
//分页
function toggleIndex() {
    $(".pagingDiv span").bind("selectstart",function(){return false;});  
    $(".pagingDiv .pageItem").click(function (e) {
        paging($(this).text());
    });
    $(".first").click(function (e) {
         paging(1);
    });
    $(".last").click(function (e) {
         paging(9);
    });
    $(".pre").click(function (e) {
        var t1=parseInt($(".pageItem.active").text())-1;
        /*  var t2=t1>=1?t1:1;
        paging(t2);  */
        if(t1>=1){
            paging(t1);
        }
    });
    $(".next").click(function (e) {
        var t1=parseInt($(".pageItem.active").text())+1;
        /* var t2=t1<=9?t1:9;
        paging(t2); */
        if(t1<=9){
            paging(t1);
        }
    });
}
//导航栏切换
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
//计算分页条相关数据
function paging(target_Index) {
    var pageSize = 5; //分页条展示5个页码
    var allIndex = 9; //总页数
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
    obj.removeClass("active");
    for (var i = i_beginIndex; i <= i_endIndex; i++) {
        switch (i) {
            case i_beginIndex:
                $(obj[0]).text(i_beginIndex);
                if(i==targetIndex){
                    $(obj[0]).addClass("active");
                } 
                break;
            case i_endIndex:
                $(obj[4]).text(i_endIndex);
                if(i==targetIndex){
                    $(obj[4]).addClass("active");
                } 
                break;
            default:
                var mIndex = i_endIndex - Math.floor(pageSize / 2);
                if (i < mIndex) {
                    $(obj[1]).text(i);
                    if(i==targetIndex){
                        $(obj[1]).addClass("active");
                    } 
                } else if (i == mIndex) {
                    $(obj[2]).text(i);
                    if(i==targetIndex){
                        $(obj[2]).addClass("active");
                    } 
                } else {
                    $(obj[3]).text(i);
                    if(i==targetIndex){
                        $(obj[3]).addClass("active");
                    } 
                }
        }
    }
}
function reSize(){
    var circleImg = $('.circleImg');
    var circleShowImg=$("#circleShowImg");
    var circleImgs=$(".circleImgs");
    var width=$(window).width();
    circleShowImg.css("width",width);
    circleImgs.css("width",width*5);
   /*  circleImg.each(function (index){
        $(this).css("left",width*index);
    }); */
     circleImg.css("width",width);
}
//轮播
function carousel(){
    /* var circleImgArray = $('.circleImg');
    circleImgArray.each */
    /* $('.circleImg').each(function (){
        $(this).css("left")
    }); */
}

 /*    $(function () {
        var circleShowImg = $('#circleShowImg');
        var circleImgs = $('.circleImgs');
        var points = $('.point span');
        var prev = $('.pre .angle');
        var next = $('.next .angle');
        var index = 1;
        var len = 5;
        var interval = 3000;
        var timer;


        function animate (offset) {
            var left = parseInt(circleImgs.css('left')) + offset;
            if (offset>0) {
                offset = '+=' + offset;
            }
            else {
                offset = '-=' + Math.abs(offset);
            }
            circleImgs.animate({'left': offset}, 300, function () {
                if(left > -200){
                    circleImgs.css('left', -600 * len);
                }
                if(left < (-600 * len)) {
                    circleImgs.css('left', -600);
                }
            });
        }

        function showButton() {
            points.eq(index-1).addClass('on').siblings().removeClass('on');
        }

        function play() {
            timer = setTimeout(function () {
                next.trigger('click');
                play();
            }, interval); 
        }
        function stop() {
            clearTimeout(timer);
        }

        next.bind('click', function () {
            if (circleImgs.is(':animated')) {
                return;
            }
            if (index == 5) {
                index = 1;
            }
            else {
                index += 1;
            }
            animate(-600);
            showButton();
        });

        prev.bind('click', function () {
            if (circleImgs.is(':animated')) {
                return;
            }
            if (index == 1) {
                index = 5;
            }
            else {
                index -= 1;
            }
            animate(600);
            showButton();
        });

        points.each(function () {
             $(this).bind('click', function () {
                 if (circleImgs.is(':animated') || $(this).attr('class')=='on') {
                     return;
                 }
                 var myIndex = parseInt($(this).attr('index'));
                 var offset = -600 * (myIndex - index);

                 animate(offset);
                 index = myIndex;
                 showButton();
             })
        });

        circleShowImg.hover(stop, play);

        play();

    }); */

