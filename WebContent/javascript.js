/**
 * 
 */
function color1(){
	document.getElementById("top1_li1").style.backgroundColor="#292929";
}
function color2(){
	document.getElementById("top1_li2").style.backgroundColor="#292929";
}
function color3(){
	document.getElementById("top1_li3").style.backgroundColor="#292929";
}
function color4(){
	document.getElementById("top1_li4").style.backgroundColor="#292929";
}
function color5(){
	document.getElementById("top1_li5").style.backgroundColor="#292929";
}
function color6(){
	document.getElementById("top1_li6").style.backgroundColor="#292929";
}




function colhidden1(){
	document.getElementById("top1_li1").style.backgroundColor="#303030";
}
function colhidden2(){
	document.getElementById("top1_li2").style.backgroundColor="#303030";
}
function colhidden3(){
	document.getElementById("top1_li3").style.backgroundColor="#303030";
}
function colhidden4(){
	document.getElementById("top1_li4").style.backgroundColor="#303030";
}
function colhidden5(){
	document.getElementById("top1_li5").style.backgroundColor="#303030";
}
function colhidden6(){
	document.getElementById("top1_li6").style.backgroundColor="#303030";
}


function showbox(){
	document.getElementById("box").style.display="block";
}
function hiddenbox(){
	document.getElementById("box").style.display="none";
}



//轮播图

var innerGroup = $(".innerwraper");
var leftArrow = $(".left-arrow");
var rightArrow = $(".right-arrow");
var spanGroup = $(".pagination span");
var imgWidth = $(".innerwraper img:first-child").eq(0).width();
var _index = 0;
var timer = null;
var flag = true;
rightArrow.on("click", function() {
  //右箭头
  flag = false;
  clearInterval(timer);
  _index++;
  selectPic(_index);
})
leftArrow.on("click", function() {
  //左箭头
  flag = false;
  clearInterval(timer);
  if (_index == 0) {
      _index = innerGroup.length - 1;
      $(".inner").css("left", -(innerGroup.length - 1) * imgWidth);
  }
  _index--;
  selectPic(_index);
})
spanGroup.on("click", function() {
  //导航切换
  _index = spanGroup.index($(this));
  selectPic(_index);
})



$(".left-arrow").hover(function() {
  //鼠标移入
  clearInterval(timer);
  flag = false;
}, function() {
  flag = true;
  timer = setInterval(go, 3000);
});

$(".right-arrow").hover(function() {
  //鼠标移入
  clearInterval(timer);
  flag = false;
}, function() {
  flag = true;
  timer = setInterval(go, 3000);
});



function autoGo(bol) {
  //自动行走
  if (bol) {
      timer = setInterval(go, 3000);
  }
}
autoGo(flag);

function go() {
  //计时器的函数
	if(_index<4){
		_index++;
	}else{
		_index = 0;
	}
  selectPic(_index);
}
function selectPic(num) {
  $(".pagination span").eq(num).addClass("active").siblings().removeClass("active");
  $(".inner").animate({
      left: -num * imgWidth,
  }, 1000, function() {
      //检查是否到最后一张
      if (_index == innerGroup.length - 1) {
    	  _index = 0;
          $(".inner").css("left", "0px");
          $(".pagination span").eq(0).addClass("active").siblings().removeClass("active");
      }
  })
}


