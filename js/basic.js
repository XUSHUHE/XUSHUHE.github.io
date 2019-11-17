$(document).ready(function () {
    reSize();
    $('.container').load('./blog_main.html');
    togglePage();
    carousel();
    var mycarousel = play();
    $("#circleShowImg").hover(function () {
        clearInterval(mycarousel);
    }, function () {
        mycarousel = play();
    });
})
//启动自动轮播
function play() {
    var timer = setInterval(function () {
        $('.next').trigger('click');
    }, 3300);
    return timer;
}
//设置body最小宽度
function reSize() {
    var width = parseInt(screen.width) - 17;
    $("#circleShowImg").css("width", width);
    $("body").css("min-width", width);
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
        $('.container').load(target, function () {
            console.info(document.querySelector('.info').offsetHeight);
        });

        obj.removeClass("active");
        $(this).addClass("active");
    });
}

//轮播
function carousel() {
    var index = 1;
    var circleImgs = $('.circleImgs');
    var width = parseInt($(".circleImg").css("width")); //单个图片大小
    //轮播动画
    function animate(offset) {
        var circleImgs = $(".circleImgs");
        var oldLeft = parseInt(circleImgs.css("left"));
        var newLeft = oldLeft + offset;
        circleImgs.animate({
            'left': newLeft + ""
        }, 300, function () {
            //向前
            if (newLeft >= 0 && offset > 0) {
                circleImgs.css("left", -offset * 3);
            }
            //向后
            if (newLeft <= offset * 4 && offset < 0) {
                circleImgs.css("left", offset);
            }
        });
    }
    //轮播指示器
    function showPoint() {
        $('.icon-yuanhuan').removeClass('icon-yuanhuan').addClass('icon-yuandianda');
        $('.point>span>i').eq(index - 1).removeClass('icon-yuandianda').addClass('icon-yuanhuan');
    }

    $('.pre').click(function () {
        if (circleImgs.is(':animated')) {
            return;
        }
        if (index == 1) {
            index = 3;
        } else {
            index -= 1;
        }
        animate(width);
        showPoint();
    });

    $('.next').click(function () {
        if (circleImgs.is(':animated')) {
            return;
        }
        if (index == 3) {
            index = 1;
        } else {
            index += 1;
        }
        animate(-width);
        showPoint();
    });

    $('.point span').each(function () {
        $(this).bind('click', function () {
            if (circleImgs.is(':animated') || $(this).hasClass('icon-yuanhuan') == true) {
                return;
            }
            var clickIndex = parseInt($(this).data('index'));
            var offset = width * (clickIndex - index);
            animate(-offset);
            index = clickIndex;
            showPoint();
        })
    });
    $(".dianzan").click(function(){
        $(this).toggleClass("dianzan dianzan1");
    });
}
