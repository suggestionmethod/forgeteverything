
var ord=0;
var isblock=true;
var isblock=false;

window.onload=function(){

function str1(){

var divs=document.getElementsByClassName("top-warper")[0].children;

console.log( divs.length)
console.log($(".top-left-h").length)
for(let i=0;i<$(".top-left-h").length;i++){
	$(".top-left-h")[i].index=i;
	
$(".top-left-h")[i].onmousemove=function(){
	for(let j=2;j<divs.length;j++){
		if(i+2==j){
			isblock=true;
			divs[j].style.display="block";
			break;
		}
	}	
}	

	}

for(let i=0;i<$(".top-left-h").length;i++){
	$(".top-left-h")[i].index=i;
	
$(".top-left-h")[i].onmouseout=function(){
	for(let j=2;j<divs.length;j++){
		if(i+2==j){
			isblock=false;
			divs[j].style.display="none";
			break;
		}
	
	}	
}	

	}

	for(let k=2;k<divs.length;k++){
		divs[k].index=k;
		divs[k].onmousemove=function(){
	
			console.log(isblock)
			if(isblock==false){
				divs[k].style.display="block";
				
			}
				
			}
		}
		for(let k=2;k<divs.length;k++){
		divs[k].index=k;
		divs[k].onmouseout=function(){
	
			console.log(isblock)
			if(isblock==false){
				divs[k].style.display="none";
				
			}
				
			}
		}
	}
str1();


	var reg = /^([1-9]||[a-z])\w{9}[0-9]$/g;
		 document.getElementById("userPhone").onblur = function(){
			//邮编： 六位数字；第一位不能为0；
		
			var str= document.getElementById("userPhone").value;
			if(reg.test(str)){
				document.getElementById("passwordErr").innerHTML= "√";
			}else{
		document.getElementById("passwordErr").innerHTML= "×";
			}
		}
		 
		  document.getElementById("phoneErr").onblur = function(){
			//邮编： 六位数字；第一位不能为0；
			
			var str1= document.getElementById("phoneErr").value;
			if(str==str1 && reg.test(str1)){
				document.getElementById("passwordErr1").innerHTML= "√";
			}else{
		document.getElementById("passwordErr1").innerHTML= "×";
			}
		}



 document.getElementById("shouji").onblur = function(){
			
		var reg1=/^1[0-9]\d{9}$/g;
			var str2= document.getElementById("shouji").value;
			if(reg1.test(str2)){
				document.getElementById("passwordErr2").innerHTML= "√";
			}else{
		document.getElementById("passwordErr2").innerHTML= "×";
			}
		}
		 


}
document.getElementById("btn").onclick=function(){
		changeyzm()
}
	function changeyzm(){
		var i=0;
		var str="";
		while(i<4){
			var num1=parseInt(Math.random()*123);
			if((num1>=48 && num1<=57)||(num1>=65 && num1<=90)||(num1>=97 && num1<=122)){
				str+=String.fromCharCode(num1);
				i++;
			}
		}
		document.getElementById("btn").innerHTML=str;	
	}

