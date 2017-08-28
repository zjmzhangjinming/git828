/*
* @Author: dell
* @Date:   2017-08-28 18:42:57
* @Last Modified by:   dell
* @Last Modified time: 2017-08-28 20:48:54
*/
//工资 
 var Salary = Number(prompt("输入你的工资"));
  var oAge = Number(prompt("输入你的工龄"));

  	if(oAge>=5){
  		alert(Salary+Salary*0.2);
  	}else {if(2<= oAge && oAge<=4){
  		alert(Salary+Salary*0.15);
  	}if (oAge<2){
  		alert(Salary+Salary*0.1);
  	}
  } 
//求数的阶乘
var num = Number(prompt("请输入"));

	for(var i=1,a=1;i<num+1;i++){
		a=a*i;
	}

	document.write(a);
//京东
	var oImg = document.getElementById("img");
	for(var i=1;i<=12;i++){
		oImg.src=i+".png";
	}

