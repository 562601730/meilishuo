//滚动导航固定
var oNav = document.getElementById("nav");
var oBanner = document.getElementById("banner");
navFixed(oNav,oBanner);
 function navFixed(obj,target){
 	window.onscroll =　function(){
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var Top  = target.offsetTop;
		if(scrollTop >= Top){
			obj.className = "nav-fixed";
		}else{
			obj.className = "";
		}
	}
 }
// 鼠标点击act-close时act消失
var oAct = document.querySelector("#act");
 var oClose = document.querySelector(".act-close");
 oClose.onclick = function(){
 	oAct.style.display = "none";
}