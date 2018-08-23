//alert("js连接上了");

var oNav = document.getElementById("nav");
var oCatalog = document.getElementById("catalog");
navFixed(oNav,oCatalog);
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