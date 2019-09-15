/* $(function () {
    var circleShowImg = $('#circleShowImg');
    
}) */
$(document).ready(function () {

    $('.container').load('./blog_main.html');

})

function paging(indexInfo) {
    var obj = $(indexInfo.id);
    var nowIndex = indexInfo.nowIndex || 1;//当前页
    var allIndex = indexInfo.allIndex || 1;//总页数
    var beginIndex;
    if(nowIndex===1){

    }
    /* if( nowIndex>=5 && allIndex<=7 ){
		var oA = document.createElement('a');
		oA.href = '#1';
		oA.innerHTML = '首页';
		obj.appendChild(oA);
	
	} */
}