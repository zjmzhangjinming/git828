/*
* @Author: dell
* @Date:   2017-08-25 23:23:35
* @Last Modified by:   dell
* @Last Modified time: 2017-08-27 15:14:39
*/

window.onload = function(){
		var oIcon = document.getElementById("icon");
		var oBox = document.getElementById("box");
	oIcon.onclick = function(){		
		oBox.style.display="none";	
	}
	var oBtn1 = document.getElementById("btn1");
	var oBtn2 = document.getElementById("btn2");
	var oTxt = document.getElementById("txt");
	var oTxt1 = document.getElementById("txt1");
	var oBox01 = document.getElementById("box01");
	var a=16;
	var b=32;
	var c=750;
	oBtn2.onclick = function(){
		a++;
		b++;
		c+=20;
		oTxt.style.fontSize =  a+"px";
		oBox01.style.width =  c+"px";
		oTxt1.style.fontSize =  b+"px";  
	}
	oBtn1.onclick = function(){
		a--;
		b--;
		c-=20;
		oTxt.style.fontSize =  a+"px";
		oTxt1.style.fontSize =  b+"px";  
		oBox01.style.width =  c+"px";
	}
	var oBtn16 =document.getElementById("btn16");
	var oBtn18 =document.getElementById("btn18");
	var oBtn26 =document.getElementById("btn26");
	var oTxt30 = document.getElementById("txt30");
	var d=16;
	var e=18;
	var f=26;
	var g=42;
	var h=55;
	var i=106;
	oBtn16.onclick = function(){
		oTxt30.style.fontSize =  d+"px";
		oBtn16.style.marginLeft =  g+"px";

	}
	oBtn18.onclick = function(){
		oTxt30.style.fontSize =  e+"px";
		oBtn16.style.marginLeft =  h+"px";
	}
	oBtn26.onclick = function(){
		oTxt30.style.fontSize =  f+"px";
		oBtn16.style.marginLeft =  i+"px";
	}

}
